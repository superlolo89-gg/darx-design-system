export function validateFitScore(data) {
  if (!data || typeof data.name !== 'string' || !data.name.trim()) throw new TypeError('Name required');
  if (!Number.isFinite(data.score) || data.score < 0 || data.score > 100) throw new RangeError('Score must be 0–100');
  if (!['low','medium','high'].includes(data.confidence)) throw new TypeError('Confidence required');
  for (const field of ['criteria','reasons','tradeOffs']) if (!Array.isArray(data[field]) || !data[field].length || data[field].some(x => typeof x !== 'string' || !x.trim())) throw new TypeError(field+' must contain explanations');
  return data;
}
export function createFitScore(data, doc = document) {
  validateFitScore(data);
  const article=doc.createElement('article');article.className='fit-card';
  function add(tag,text,parent=article){const el=doc.createElement(tag);el.textContent=text;parent.append(el);return el;}
  add('p','Illustrative data · contextual suitability');add('h3',data.name);add('p','Experience Fit Score').className='eyebrow';add('strong',String(data.score)).className='score';add('p',data.confidence[0].toUpperCase()+data.confidence.slice(1)+' confidence');
  for(const [label,field] of [['Selected criteria','criteria'],['Why it fits','reasons'],['Trade-offs','tradeOffs']]) {add('h4',label);const ul=add('ul','');data[field].forEach(x=>add('li',x,ul));}return article;
}
export function createButton(label, onClick, doc = document) { const button=doc.createElement('button');button.type='button';button.textContent=label;button.addEventListener('click',onClick);return button; }
export function createConfidence(level, doc = document) {if(!['low','medium','high'].includes(level))throw new TypeError('Invalid confidence');const p=doc.createElement('span');p.textContent=level+' confidence';return p;}
