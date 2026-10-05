// Agent Loop diagram content. Imported ONLY at build time (Astro frontmatter),
// then shipped to the browser encoded (see encode.ts). Never import this
// from a client <script>, or the plain text ends up in the JS bundle.

export type Kind = 'script' | 'ai' | 'user' | 'learn' | 'hub' | 'out';
export interface N { id: string; label: string; sub?: string; kind: Kind; x: number; y: number; r?: number; info: string[]; title?: string; sats?: string[]; }
export interface E { from: string; to: string; cls: string; bend?: number; label?: string; }
export interface S { from: string; to: string; ok: boolean; bend?: number; }
export interface View { nodes: N[]; ring?: string[]; edges: E[]; cycle?: string[]; caption?: string; ringR?: number; }

export const CX = 330, CY = 285, R = 190;
const at = (deg: number, r = R) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: Math.round(CX + r * Math.cos(a)), y: Math.round(CY + r * Math.sin(a)) };
};

export const VIEWS: Record<string, View> = {
  f1: {
    ring: ['s_in', 'pre', 'prompt', 'post', 's_out', 'queue'],
    cycle: ['req', 's_in', 'pre', 'prompt', 'post', 's_out', 'queue'],
    nodes: [
      { id: 's_in', label: 'Scripts', sub: 'first pass', kind: 'script', ...at(235), r: 34,
        info: ['Deterministic; static', 'Ideally 99% of the work happens here', 'Results go to both hooks, never to the Prompt'] },
      { id: 'pre', label: 'Pre-Prompt', sub: 'hook', kind: 'ai', ...at(305),
        info: ['AI overloaded with context', 'Does NOT get the user input', 'Gets the script results', 'Full access to every Skill, Tool, Reference', 'Catalogs which Skills/Tools it used'] },
      { id: 'prompt', label: 'Prompt', sub: 'silo', kind: 'ai', ...at(15),
        info: ['Gets the user input, whatever it is', 'Only uses the Skills/Tools the Pre-Prompt cataloged', 'Does NOT see script output', 'Does NOT see the Pre-Prompt’s output'] },
      { id: 'post', label: 'Post-Prompt', sub: 'hook', kind: 'ai', ...at(85),
        info: ['Gets everything: user input, script results, both AI passes', 'Combines the results', 'AI found something → turn it into a script (Script Learning)', 'AI passes disagree → tune Skills/Tools (AI Learning)'] },
      { id: 's_out', label: 'Scripts', sub: 'normalize', kind: 'script', ...at(150), r: 34,
        info: ['Normalization', 'Posts to the Learning queues', 'Palindrome architecture. Fight me.'] },
      { id: 'queue', label: 'Learning', sub: 'queues', kind: 'learn', ...at(192),
        info: ['Script Learning → new deterministic checks', 'AI Learning → tuned Skills/Tools', 'Every lap moves more work out of AI'] },
      { id: 'hub', label: 'Skills · Tools', sub: 'references', kind: 'hub', x: CX, y: CY, r: 40,
        info: ['The harness and scaffolding', 'Pre-Prompt catalogs what it used', 'Prompt is restricted to that catalog', 'AI Learning tunes these'] },
      { id: 'req', label: 'Request', sub: 'Input + User-Ask', kind: 'user', x: 95, y: 75, r: 44,
        info: ['Structured in two sections: Input and User-Ask', 'A script splits them apart', 'Input → scripts; User-Ask → set aside'] },
      { id: 'user', label: 'User-Ask', sub: 'set aside', kind: 'user', x: 640, y: 75, r: 36,
        info: ['Only the Prompt and the Post-Prompt see it', 'Tossed out everywhere else'] },
    ],
    edges: [
      { from: 'pre', to: 'hub', cls: 'hub', bend: 0.15, label: 'catalogs' },
      { from: 'hub', to: 'prompt', cls: 'hub', bend: 0.15, label: 'only these' },
      { from: 'queue', to: 'hub', cls: 'learn', bend: -0.2, label: 'AI learning' },
      { from: 'user', to: 'prompt', cls: 'user', bend: -0.15 },
      { from: 'user', to: 'post', cls: 'user', bend: 0.15 },
      { from: 'req', to: 's_in', cls: 'user', bend: 0.25, label: 'Input' },
      { from: 'req', to: 'user', cls: 'user', bend: -0.2, label: 'User-Ask' },
    ],
    caption: 'Proof Agent · “Sherclank Holmes”',
  },
  f2: {
    ring: ['pre', 'prompt', 'post', 's_out', 'queue'],
    cycle: ['req', 'pre', 'prompt', 'post', 'f1', 's_out', 'queue'],
    nodes: [
      { id: 'pre', label: 'Pre-Prompt', sub: 'dry-run only', kind: 'ai', ...at(285),
        info: ['AI overloaded with context', 'HEAVY access to scripts', 'Skeptical of the user input', 'Full access to every Skill, Tool, Reference', 'Catalogs what it used. DRY-RUN ONLY'] },
      { id: 'prompt', label: 'Prompt', sub: 'face value', kind: 'ai', ...at(5),
        info: ['Takes the ask AT FACE VALUE', 'Only uses the cataloged Skills/Tools', 'Still has access to all scripts', 'Does NOT see the Pre-Prompt’s output'] },
      { id: 'post', label: 'Post-Prompt', sub: 'live-fire', kind: 'ai', ...at(80),
        info: ['Gets the user input and both AI passes', 'Couldn’t build it → Script Learning', 'Passes disagree → AI Learning', 'Authoritative result; live-fire', 'Sends to Framework #1 for validation'] },
      { id: 's_out', label: 'Scripts', sub: 'normalize', kind: 'script', ...at(150), r: 34,
        info: ['Normalization', 'Posts to the Learning queues'] },
      { id: 'queue', label: 'Learning', sub: 'queues', kind: 'learn', ...at(215),
        info: ['New scripts land in the script library', 'Tuned Skills/Tools land in the hub'] },
      { id: 'hub', label: 'Skills · Tools', sub: '+ script library', kind: 'hub', x: CX, y: CY, r: 40,
        info: ['No script-heavy front end here', 'Scripts are tools both AI passes can call'] },
      { id: 'req', label: 'Request', sub: 'Input + User-Ask', kind: 'user', x: 95, y: 75, r: 44,
        info: ['Structured in two sections: Input and User-Ask', 'A script splits them apart'] },
      { id: 'user', label: 'User-Ask', kind: 'user', x: 640, y: 75, r: 36,
        info: ['Pre-Prompt reads it skeptically', 'Prompt reads it at face value', 'Post-Prompt reconciles the two'] },
      { id: 'f1', label: '⇄ #1', sub: 'validate', kind: 'out', x: 680, y: 430, r: 38,
        info: ['Live-fire output gets validated by the Proof Agent', 'Findings come back to the Post-Prompt', 'Revise → re-validate until it passes', 'SDLC and all that'] },
    ],
    edges: [
      { from: 'pre', to: 'hub', cls: 'hub', bend: 0.15, label: 'catalogs' },
      { from: 'hub', to: 'prompt', cls: 'hub', bend: 0.15, label: 'only these' },
      { from: 'queue', to: 'hub', cls: 'learn', bend: -0.2, label: 'AI learning' },
      { from: 'user', to: 'prompt', cls: 'user', bend: -0.15 },
      { from: 'user', to: 'post', cls: 'user', bend: 0.15 },
      { from: 'user', to: 'pre', cls: 'user', bend: -0.3, label: 'skeptical' },
      { from: 'req', to: 'pre', cls: 'user', bend: 0.25, label: 'Input' },
      { from: 'req', to: 'user', cls: 'user', bend: -0.2, label: 'User-Ask' },
      { from: 'post', to: 'f1', cls: 'handoff', bend: 0.22, label: 'live result' },
      { from: 'f1', to: 'post', cls: 'learn', bend: 0.22, label: 'feedback' },
    ],
    caption: 'Build Agent · “Bob the Viber”',
  },
  f3: {
    ring: ['sub', 'skeptic', 'naive', 'combine', 'queue'],
    cycle: ['req', 'sub', 'skeptic', 'naive', 'combine', 'dry', 'f2', 'queue'],
    nodes: [
      { id: 'sub', label: 'Scoped', sub: 'sub-agents', kind: 'ai', ...at(270), r: 38, sats: ['SSDF', 'CAPEC', 'RMF', '…'],
        info: ['A fuck ton of agents', 'Each scoped to one guideline / regulation / framework / methodology', 'Matches the Input to the most relevant source'] },
      { id: 'skeptic', label: 'Skeptical', sub: 'AI pass', kind: 'ai', ...at(345),
        info: ['Assumes the plan is wrong until proven otherwise', 'Gets the doc mapping + the User-Ask', 'Never sees the face-value plan'] },
      { id: 'naive', label: 'Face-value', sub: 'AI pass', kind: 'ai', ...at(55),
        info: ['Takes the User-Ask as given', 'Gets the doc mapping', 'Never sees the skeptic’s holes'] },
      { id: 'combine', label: 'Combining', sub: 'AI pass', kind: 'ai', ...at(125),
        info: ['Reconciles both passes into a draft plan', 'Checks the draft with #2 and #1 via dry-runs', 'Output: part of a Project Management doc'] },
      { id: 'queue', label: 'Learning', sub: 'queues', kind: 'learn', ...at(195),
        info: ['Weakest link: input, processing and output are all non-deterministic', 'Lessons are mostly doc-set and prompt tuning', 'Simplest to implement'] },
      { id: 'hub', label: 'Doc sets', sub: 'one per agent', kind: 'hub', x: CX, y: CY, r: 42, info: ['SSDF, CAPEC, RMF, …', 'Each sub-agent owns exactly one'] },
      { id: 'req', label: 'Request', sub: 'Input + User-Ask', kind: 'user', x: 95, y: 75, r: 44,
        info: ['Input: requirements, docs, constraints', 'User-Ask: what they want planned', 'A script splits them apart'] },
      { id: 'user', label: 'User-Ask', sub: 'set aside', kind: 'user', x: 640, y: 75, r: 36,
        info: ['The scoped sub-agents never see it', 'Skeptic and face-value passes read it two ways'] },
      { id: 'dry', label: '⇄ #2 + #1', sub: 'dry-runs', kind: 'out', x: 690, y: 255, r: 42,
        info: ['#3 asks #2 to dry-run pieces of the draft plan', '#2 builds nothing live; #1 validates what it would build', 'A “how it fits” report comes back to the Combining pass'] },
      { id: 'f2', label: '→ #2', sub: 'final plan', kind: 'out', x: 680, y: 440, r: 38, info: ['The finished plan becomes Framework #2’s Input'] },
    ],
    edges: [
      { from: 'req', to: 'sub', cls: 'user', bend: 0.2, label: 'Input' },
      { from: 'req', to: 'user', cls: 'user', bend: -0.2, label: 'User-Ask' },
      { from: 'user', to: 'skeptic', cls: 'user', bend: 0.12 },
      { from: 'user', to: 'naive', cls: 'user', bend: -0.12 },
      { from: 'hub', to: 'sub', cls: 'hub', bend: 0.2, label: 'scoped docs' },
      { from: 'combine', to: 'dry', cls: 'handoff', bend: 0.2, label: 'dry-run request' },
      { from: 'dry', to: 'combine', cls: 'learn', bend: 0.2, label: 'how it fits' },
      { from: 'combine', to: 'f2', cls: 'handoff', bend: -0.1, label: 'final plan' },
      { from: 'queue', to: 'hub', cls: 'learn', bend: -0.2, label: 'tuning' },
    ],
    caption: 'Draft Agent · “Frank Lloyd Vibe”',
  },
  overview: {
    nodes: [
      { id: 'F3', label: 'Draft Agent', sub: 'Frank Lloyd Vibe', kind: 'ai', x: 250, y: 130, r: 62,
        info: ['Scoped sub-agents turn an idea into a project plan', 'Click to open'], title: 'f3' },
      { id: 'F2', label: 'Build Agent', sub: 'Bob the Viber', kind: 'ai', x: 580, y: 130, r: 62,
        info: ['Builds from the plan: dry-run, face value, reconcile, live-fire', 'Click to open'], title: 'f2' },
      { id: 'F1', label: 'Proof Agent', sub: 'Sherclank Holmes', kind: 'script', x: 415, y: 410, r: 62,
        info: ['Scripts do the work, AI cross-checks', 'Feedback goes back to #2', 'Click to open'], title: 'f1' },
      { id: 'pool', label: 'Department', sub: 'learning pool', kind: 'learn', x: 415, y: 245, r: 44,
        info: ['“As a Service”: standardize, centralize, audit', 'Every loop’s learnings get aggregated wholesale', 'Sharing is caring'] },
    ],
    edges: [
      { from: 'F3', to: 'F2', cls: 'handoff', bend: -0.25, label: 'plans + dry-run requests' },
      { from: 'F2', to: 'F3', cls: 'learn', bend: -0.25, label: 'dry-run results' },
      { from: 'F2', to: 'F1', cls: 'handoff', bend: -0.12, label: 'builds to validate' },
      { from: 'F1', to: 'F2', cls: 'learn', bend: 0.38, label: 'feedback' },
      { from: 'F1', to: 'pool', cls: 'learn', bend: 0 },
      { from: 'F2', to: 'pool', cls: 'learn', bend: 0 },
      { from: 'F3', to: 'pool', cls: 'learn', bend: 0 },
    ],
    cycle: ['F3', 'F2', 'F1', 'F2'],
    caption: 'Three loops, one learning pool',
  },
};

// Narrated "Run a cycle" for Framework #1: two laps of the fraud example.
export interface RunStep { at: string; text: string; learn?: boolean; }
export const RUN = {
  meterLabel: 'Red flags the scripts catch',
  start: 3,
  total: 4,
  laps: [
    { title: 'Lap 1', end: 'Lap 1 done. The scripts now catch all 4 red flags on their own. Run lap 2 to see what changes.', steps: [
      { at: 'req', text: 'A possible check-fraud alert comes in. A script splits it: the Input (account, IPs, user-agents, transactions) goes to the scripts, and the User-Ask (“is this fraud, and who do I notify?”) gets set aside.' },
      { at: 's_in', text: 'Scripts de-duplicate the IPs, user-agents and languages, and run them against Scamalytics and MaxMind. 3 red flags. No AI, no tokens.' },
      { at: 'pre', text: 'The Pre-Prompt reviews the 3 flags without ever seeing the question, and catalogs the skills that matter here: geo-IP and device fingerprinting.' },
      { at: 'prompt', text: 'The Prompt gets the question and only those skills. It can’t see what the scripts found. It comes back with 4 red flags, including an Accept-Language mismatch.' },
      { at: 'post', text: 'The Post-Prompt compares: scripts said 3, the Prompt said 4. The AI found something the scripts didn’t, so that’s bad. Accept-Language goes to Script Learning.' },
      { at: 's_out', text: 'The red-flag report and the email to the Fraud team come out in the same format as always. The lesson gets posted to the learning queue.' },
      { at: 'queue', text: 'Script Learning turns the Accept-Language check into a new script. Next alert, the scripts catch it themselves.', learn: true },
    ] },
    { title: 'Lap 2', end: 'Lap 2 was quiet. The scripts caught all 4 flags on their own and the AI had nothing new to add.', steps: [
      { at: 'req', text: 'Next fraud alert. Same split: Input to the scripts, User-Ask set aside.' },
      { at: 's_in', text: 'Scripts run, now with the Accept-Language check. 4 red flags, deterministic.' },
      { at: 'pre', text: 'The Pre-Prompt catalogs the same skills as last time.' },
      { at: 'prompt', text: 'The Prompt, still in its silo, finds the same 4.' },
      { at: 'post', text: 'Scripts and Prompt agree. Nothing to learn.' },
      { at: 's_out', text: 'Same report, same format.' },
      { at: 'queue', text: 'Nothing new in the queue. Every clean lap means the scripts are covering more of the work and the AI is doing less of it.' },
    ] },
  ],
};

export const DEFAULTS = {
  overview: ['#3 plans, #2 builds, #1 validates and feeds back', 'Every loop drops lessons into one shared pool', 'Each lap moves work from AI into scripts'],
  f1: ['The ring is a palindrome: scripts → hook → prompt → hook → scripts', 'Learning queues close the loop', 'Toggle “what each stage can see” to show the silos'],
  f2: ['No script-heavy front end: scripts are tools both AI passes can call', 'Dry-run first, live-fire last', 'Live-fire output goes to #1 for validation'],
  f3: ['Scoped sub-agents ground the Input in real doc sets, blind to the ask', 'Skeptical and face-value passes run separately', 'The combining pass drafts the plan, dry-runs it through #2 and #1, then ships it'],
};

export const DESC = 'Each framework is a palindrome loop of scripts, hooks and prompts. Learning queues feed results back into scripts and skills, so every cycle moves more work from AI into deterministic scripts.';

// ── Narration ────────────────────────────────────────────────────────────
// Plain-language layer on top of the spec bullets: what happens at each
// stage, a running example, and what the stage can / can't see.
export interface Story { story: string; example?: string; gets?: string[]; blind?: string[]; why?: string; }

export const EXAMPLES: Record<string, string> = {
  f1: 'Example: a possible check-fraud alert at a bank',
  f2: 'Example: “write me a phishing-response playbook”',
  f3: 'Example: “stand up a new SOAR integration”',
};

export const INTROS: Record<string, string[]> = {
  overview: [
    'Three loops that feed each other: #3 plans, #2 builds, #1 validates.',
    'Feedback flows from #1 back to #2 until the build holds up.',
    'All three drop their lessons into one shared pool, so the whole department gets smarter.',
    'Click a loop to open it.',
  ],
  f1: [
    'Each circle is a stage. A request travels clockwise around the ring.',
    'Green = scripts (same answer every time). Purple = AI (not). Orange = learning. Pink = the shared Skills/Tools.',
    'It starts with a structured request: an Input section and a User-Ask section, split apart by a script.',
    'We’ll follow one example all the way round: a possible check-fraud alert at a bank.',
  ],
  f2: [
    'Same ring idea, minus the script-heavy front end: scripts are just tools the AI can call.',
    'Two AIs read the request two different ways, then a third reconciles them.',
    'Example: someone asks for a phishing-response playbook.',
  ],
  f3: [
    'The planning loop. Lots of narrowly scoped agents, each grounded in one framework or regulation.',
    'It starts the same way: a structured request, split into Input and User-Ask.',
    'Before committing, it dry-runs the plan through #2 (and #1): the PM asking the engineers how it fits.',
    'Everything here is non-deterministic, which makes it the weakest link and the easiest to build.',
    'Example: someone wants to stand up a new SOAR integration.',
  ],
};

export const FINALES: Record<string, string[]> = {
  f1: [
    'Every lap, anything the AI catches that the scripts missed becomes a new script.',
    'Scripts grow, AI shrinks, tokens go down.',
    'Every stage is told to finish the job. It never fully will, and that gap is what feeds the learning queue. Keep the bar extremely high for the AI and make it think it’s always gotten it wrong.',
  ],
  f2: [
    'If the skeptic and the builder disagree, that’s bad. Tune the Skills and Tools until they agree.',
    'Live-fire output goes to Framework #1 and bounces back and forth until it passes validation.',
  ],
  f3: [
    'The plan only ships after #2 and #1 have dry-run it.',
    'The finished plan becomes Framework #2’s Input.',
    '#3 plans → #2 builds → #1 validates → feedback → repeat.',
  ],
};

export const STORIES: Record<string, Record<string, Story>> = {
  overview: {
    F3: { story: 'Turns an idea into a grounded project plan, checking with #2 (and through it, #1) via dry-runs before committing. The PM asking the engineers how it all fits together.' },
    F2: { story: 'Builds from the plan: skeptical dry run, face-value build, reconcile, ship.' },
    F1: { story: 'Checks the build script-first, and sends what it finds back to #2.' },
    pool: { story: 'Every loop’s lessons land in one shared, audited pool for the whole department. That’s the “as a Service” part.' },
  },
  f1: {
    req: { story: 'Every request comes in structured, in two sections: the Input (the data) and the User-Ask (what the person wants). A script splits them apart before any AI touches anything.',
      example: 'Input: the SIEM fraud alert (account, IPs, user-agents, transactions). User-Ask: “Is this fraud, and who do I notify?”',
      gets: ['Input section', 'User-Ask section'],
      why: 'Splitting by structure, not by AI, is free and exact. Most of the loop never sees the User-Ask at all, so the question can’t steer how the evidence is read.' },
    s_in: { story: 'Everything that can be done deterministically happens first. No AI, no tokens, same answer every time.',
      example: 'Pull the account’s logs from the SIEM, de-duplicate IPs, user-agents and languages, check them against Scamalytics and MaxMind. Out come 3 red flags.',
      gets: ['The Input section'], blind: ['The User-Ask'],
      why: 'Scripts are free, fast and repeatable. Every check that lives here is a check the AI never has to burn tokens on, or get wrong.' },
    pre: { story: 'An AI with the whole toolbox reviews what the scripts found, without seeing what the user asked. It works out which skills and tools actually matter here, and writes that list down.',
      example: 'It reviews the 3 red flags, decides the geo-IP and device-fingerprint skills are the relevant ones, and catalogs them.',
      gets: ['Script results', 'Every Skill, Tool, Reference'], blind: ['The user’s question'],
      why: 'Hiding the question stops the AI from anchoring on how it was asked. It judges the evidence, and its skill catalog becomes the guardrail for the next stage.' },
    prompt: { story: 'A second AI gets the actual question, but works in a silo: only the cataloged skills, and none of the earlier answers. It has to reach its own conclusion.',
      example: 'The analyst asks “is this fraud?”. With only the geo-IP and fingerprint skills, it finds 4 red flags, including an Accept-Language mismatch the scripts never checked.',
      gets: ['The user’s question', 'Only the cataloged Skills/Tools'], blind: ['Script results', 'Pre-Prompt’s output'],
      why: 'An independent answer is only useful if it’s actually independent. If it could see the scripts, it would just agree with them, and you’d never find what they miss.' },
    post: { story: 'The referee. It sees everything and compares. Anything the AI found that the scripts missed becomes a new script. Anywhere the AIs disagree, the skills get tuned.',
      example: 'Scripts said 3 flags, the silo said 4. The 4th (language mismatch) goes to Script Learning. The two AIs rated severity differently, so that goes to AI Learning.',
      gets: ['The user’s question', 'Script results', 'Both AI passes'],
      why: 'If the AI found something the scripts didn’t, that’s bad, so it becomes a script. If the AIs disagree, that’s bad too, so the Skills and Tools get tuned.' },
    s_out: { story: 'Back to deterministic. Results get normalized into the same shape every time, and the lessons get posted to the learning queues.',
      example: 'The red-flag report and the email to the Fraud team come out identical in format, every time.',
      gets: ['Only the Post-Prompt’s verdict'], blind: ['Input', 'User-Ask', 'Raw AI passes'],
      why: 'Downstream people and systems need the same shape every time. The palindrome means the loop starts and ends deterministic.' },
    queue: { story: 'This is what makes it a loop. Everything arrives here through the normalization layer, never raw. Script Learning turns AI discoveries into new deterministic checks; AI Learning tunes the skills.',
      example: 'Next fraud alert, the scripts check Accept-Language themselves. One less thing for the AI to catch, and fewer tokens.',
      gets: ['Normalized output (only)'], blind: ['Raw AI passes'],
      why: 'Every lap, the scripts cover a little more and the AI does a little less, which means fewer tokens next time.' },
    hub: { story: 'The harness: Skills, Tools and References. The Pre-Prompt decides which ones apply; the Prompt is only allowed those.',
      why: 'Restricting the Prompt to cataloged skills keeps it focused, and keeps token use down.' },
    user: { story: 'The User-Ask, set aside by the split. Only the Prompt and the Post-Prompt ever see it; everywhere else it’s tossed out.',
      why: 'Framing bias is real. The same evidence reads differently depending on how the question is worded.' },
  },
  f2: {
    req: { story: 'Same structure: an Input section and a User-Ask section, split apart by a script.',
      example: 'Input: the mail platform, current quarantine rules, the ticketing setup. User-Ask: “Build me a phishing-response playbook.”',
      gets: ['Input section', 'User-Ask section'] },
    pre: { story: 'A skeptical AI with heavy script access does a dry run: what would it take to build this, and which skills, tools and scripts would it need? Nothing goes live.',
      example: 'It questions the ask (which mail platform? is quarantine automatic?) and catalogs the email, sandbox and ticketing tools.',
      gets: ['The request (read skeptically)', 'Every Skill, Tool, Script'], blind: ['Nothing is live yet'],
      why: 'A dry run is cheap. Catching a bad assumption before anything goes live is the cheapest fix there is.' },
    prompt: { story: 'Takes the ask at face value and builds it, using only the cataloged tools. It never sees the skeptic’s notes.',
      example: 'It writes the playbook exactly as asked.',
      gets: ['The request (at face value)', 'Cataloged Skills/Tools', 'All scripts'], blind: ['The skeptic’s notes'],
      why: 'Someone has to build what was actually asked for, or the skeptic’s concerns never get tested against a real artifact.' },
    post: { story: 'Compares the skeptic and the builder. If neither could build it, that’s a script to write. If they disagree, the skills get tuned. Then it ships the authoritative result.',
      example: 'The builder assumed automatic quarantine; the skeptic flagged it. The reconciled playbook goes live, and to Framework #1 for validation.',
      gets: ['The request', 'Both AI passes'],
      why: 'Shipping only after two readings agree (or after the disagreement is resolved) is what makes the result authoritative.' },
    s_out: { story: 'Normalizes the output and posts the lessons.', example: 'Every playbook comes out in the same structure.' },
    queue: { story: 'New scripts land in the script library; tuned skills land in the hub. Next build starts smarter.' },
    hub: { story: 'No script-heavy front end here. Scripts are tools both AI passes can call.' },
    user: { story: 'The User-Ask, read twice: once skeptically, once at face value.' },
    f1: { story: 'Framework #1 validates the live result script-first and sends its findings back to the Post-Prompt. It revises and resubmits until it passes.',
      example: '#1 finds the playbook never closes the ticket. Back to #2’s Post-Prompt, revised, re-validated: passes on round two. The miss goes to the learning queue.',
      gets: ['Live result', 'Each revision'], blind: ['The builder’s reasoning'],
      why: 'Building and validating are separate loops on purpose. The builder never grades its own work.' },
  },
  f3: {
    req: { story: 'Same structure as every loop: an Input section and a User-Ask section, split apart by a script.',
      example: 'Input: the vendor’s API docs, our data-handling policy, the compliance requirements. User-Ask: “Plan a new SOAR integration for this vendor.”',
      gets: ['Input section', 'User-Ask section'] },
    sub: { story: 'A pile of narrowly scoped agents, each owning one document set. They map the Input against their framework, without ever seeing what was asked for, so they report what the docs require, not what the asker hopes.',
      example: 'The SSDF agent flags secure-build requirements, the CAPEC agent flags likely attack patterns against the integration, and the RMF agent flags the authorization steps.',
      gets: ['Input', 'Its one scoped document set'], blind: ['User-Ask'],
      why: 'Narrow agents with one document set each stay accurate. One generalist agent with every framework loaded just guesses.' },
    skeptic: { story: 'Pokes holes. Reads the User-Ask skeptically against the doc mapping: what’s missing, what’s risky, what’s being assumed?',
      example: 'Who owns the API keys? What happens when the vendor rate-limits us? Where does the data land, and is that allowed?',
      gets: ['Doc mapping', 'User-Ask (skeptically)'], blind: ['The face-value plan'],
      why: 'A critic that can see the draft plan starts editing it instead of attacking it.' },
    naive: { story: 'Takes the User-Ask at face value and plans the straightforward version, using the doc mapping.',
      example: 'Connect, map fields, schedule, alert on failure. Done.',
      gets: ['Doc mapping', 'User-Ask (at face value)'], blind: ['The skeptic’s holes'],
      why: 'Someone has to write the simple plan, or the skeptic’s concerns have nothing concrete to land on.' },
    combine: { story: 'The project manager. Reconciles both passes into a draft plan, the simple path with the skeptic’s risks turned into tasks and gates, then checks it with the builders before committing.',
      example: 'Plan: the face-value build, plus “rotate API keys via the vault” as a task, rate-limit backoff as an acceptance criterion, and a data-residency sign-off as a gate.',
      gets: ['Doc mapping', 'Skeptic’s holes', 'Face-value plan', 'User-Ask', 'Dry-run fit reports'],
      why: 'The plan is only as good as the reconciliation. Keeping both passes means risks become tasks instead of getting dropped.' },
    dry: { story: 'Before the plan is final, #3 asks #2 to dry-run the pieces. #2 builds nothing live, and #1 validates what #2 would build. It’s the project manager asking the technical folks how it all fits together.',
      example: 'The dry-run shows the vendor’s webhook payload doesn’t match our field mapping, and #1 flags that nothing handles rate-limit backoff yet. Both become tasks before the plan ships.',
      gets: ['Draft plan pieces'], blind: ['Live systems (dry-run only)'],
      why: 'A plan written without asking the people who build it is fiction. A dry-run is the cheapest reality check there is.' },
    f2: { story: 'The finished, dry-run-checked plan becomes Framework #2’s Input. #3 plans, #2 builds, #1 validates.',
      example: 'Each plan task turns into a build request for the Build Agent (#2).', gets: ['Project plan'] },
    queue: { story: 'Input, processing and output are all non-deterministic here, so lessons are mostly tuning: which doc sets mattered, which prompts drifted. Weakest link, simplest to build.',
      example: 'The rate-limit risk keeps coming up, so it becomes a standing checklist item for every integration plan.',
      gets: ['Project plan'], why: 'Even the weakest loop should get a little less weak every lap.' },
    hub: { story: 'The document sets the sub-agents are scoped to: SSDF, CAPEC, RMF, and so on. One per agent.' },
    user: { story: 'The User-Ask, set aside by the split. The scoped sub-agents never see it; the skeptic and the face-value pass each read it their own way.' },
  },
};

// ── Data flow ────────────────────────────────────────────────────────────
// What each artifact reaches (ok) and is deliberately kept from (no).
// `from` is the node it originates at. Drives the Trace chips, the
// "What flows where" matrix, and the per-step flow lines in the walkthrough.
export interface Flow { id: string; label: string; from: string; ok: string[]; no: string[]; /** Always draw the ✕ lines, even when unticked. */ pin?: boolean; }

export const FLOWS: Record<string, Flow[]> = {
  f1: [
    { id: 'input', label: 'Input', from: 'req', ok: ['s_in', 'pre', 'prompt', 'post'], no: [] },
    { id: 'ask', label: 'User-Ask', from: 'user', ok: ['prompt', 'post'], no: ['s_in', 'pre'], pin: true },
    { id: 'scripts', label: 'Script results', from: 's_in', ok: ['pre', 'post'], no: ['prompt'] },
    { id: 'catalog', label: 'Skill catalog', from: 'pre', ok: ['prompt', 'post'], no: [] },
    { id: 'prenotes', label: 'Pre-Prompt findings', from: 'pre', ok: ['post'], no: ['prompt'] },
    { id: 'answer', label: 'Prompt answer', from: 'prompt', ok: ['post'], no: [] },
    { id: 'verdict', label: 'Verdict', from: 'post', ok: ['s_out'], no: [] },
    { id: 'normalized', label: 'Normalized output', from: 's_out', ok: ['queue'], no: [] },
    { id: 'lessons', label: 'Lessons', from: 'queue', ok: ['s_in', 'hub'], no: [] },
  ],
  f2: [
    { id: 'input', label: 'Input', from: 'req', ok: ['pre', 'prompt', 'post'], no: [] },
    { id: 'ask', label: 'User-Ask', from: 'user', ok: ['pre', 'prompt', 'post'], no: [] },
    { id: 'catalog', label: 'Skill catalog', from: 'pre', ok: ['prompt', 'post'], no: [] },
    { id: 'dryrun', label: 'Dry-run notes', from: 'pre', ok: ['post'], no: ['prompt'] },
    { id: 'build', label: 'Face-value build', from: 'prompt', ok: ['post'], no: [] },
    { id: 'live', label: 'Live result', from: 'post', ok: ['s_out', 'f1'], no: [] },
    { id: 'normalized', label: 'Normalized output', from: 's_out', ok: ['queue'], no: [] },
    { id: 'feedback', label: 'Validation feedback', from: 'f1', ok: ['post'], no: [] },
    { id: 'lessons', label: 'Lessons', from: 'queue', ok: ['hub'], no: [] },
  ],
  f3: [
    { id: 'input', label: 'Input', from: 'req', ok: ['sub', 'combine'], no: [] },
    { id: 'ask', label: 'User-Ask', from: 'user', ok: ['skeptic', 'naive', 'combine'], no: ['sub'], pin: true },
    { id: 'mapping', label: 'Doc mapping', from: 'sub', ok: ['skeptic', 'naive', 'combine'], no: [] },
    { id: 'holes', label: 'Skeptic’s holes', from: 'skeptic', ok: ['combine'], no: ['naive'] },
    { id: 'plan', label: 'Face-value plan', from: 'naive', ok: ['combine'], no: ['skeptic'] },
    { id: 'dryreq', label: 'Dry-run request', from: 'combine', ok: ['dry'], no: [] },
    { id: 'fit', label: 'Fit report', from: 'dry', ok: ['combine'], no: [] },
    { id: 'pm', label: 'Final plan', from: 'combine', ok: ['f2', 'queue'], no: [] },
  ],
};
