export const journey = ['Security Tools', 'Validated Critical Alerts', 'Adaptive Investigation', 'Evidence Correlation', 'Governance & Compliance', 'Human Validation', 'Decision Intelligence Dashboard', 'Business Decision'];
export const agents = [
 ['Vira Cortex','Orchestration Engine','Coordinates every specialized agent across the platform.'],
 ['Netra Scan','Security Visibility Engine','Collects and analyzes telemetry across the environment.'],
 ['Vira Deep','Adaptive Investigation Engine','Runs deep, contextual investigations into validated alerts.'],
 ['Vira Judge','Governance & Policy Intelligence','Evaluates findings against policy, governance, and compliance.'],
 ['Human-in-the-Loop','Expert Validation','SOC analysts and managers review and refine AI findings before they reach a decision-maker.'],
 ['Netra Responder','Decision Intelligence Engine','Delivers trusted, explainable, policy-aware decisions for security and business leaders.'],
];
export function pageHead(title: string, description: string, path: string) { return { meta: [{title}, {name:'description',content:description}, {property:'og:title',content:title}, {property:'og:description',content:description}, {property:'og:type',content:'website'}, {property:'og:url',content:`https://cyber-glow-pro.lovable.app${path}`}, {name:'twitter:card',content:'summary_large_image'}], links:[{rel:'canonical',href:`https://cyber-glow-pro.lovable.app${path}`}] }; }
