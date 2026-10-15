export type OpportunityStatus = 'draft' | 'published' | 'closed' | 'archived';
export type GuideStatus = 'draft' | 'published' | 'archived';
export type Opportunity = {
  id: string; title: string; organisation: string; type: string; province: string; city: string;
  locationType: string; industry: string; qualification: string; experience: string; paidStatus: string;
  stipend: string; closingDate: string; description: string; requirements: string; responsibilities: string;
  benefits: string; howToApply: string; sourceUrl: string; sourceStatus: string; status: OpportunityStatus;
  createdAt: string; featured: boolean;
};
export type Guide = {
  id: string; title: string; category: string; copy: string; read: string;
  checklist: string[]; status: GuideStatus; createdAt: string;
};
export type ApplyIntent = { id: string; opportunityId: string; createdAt: string };
export type Report = { id: string; opportunityId: string; reason: string; details: string; createdAt: string; status: 'open' | 'resolved' };
export type Profile = { name: string; province: string; qualification: string; interests: string[] };
export type Activity = { id: string; kind: 'view' | 'search' | 'save' | 'apply' | 'report' | 'share'; opportunityId?: string; term?: string; createdAt: string };
export type Store = { version: number; opportunities: Opportunity[]; guides: Guide[]; applyIntents: ApplyIntent[]; savedIds: string[]; reports: Report[]; profile: Profile; activity: Activity[] };

const KEY = 'internsa.demo.v1';
const formatDate = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
const dateIn = (days: number) => { const d = new Date(); d.setDate(d.getDate() + days); return formatDate(d); };
const daysAgo = (days: number) => { const d = new Date(); d.setDate(d.getDate() - days); return d.toISOString(); };
const uid = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

const guideSeeds: Guide[] = [
  {id:'guide-cv',category:'CVs',title:'Build a CV that gets read',copy:'A clear one-page starting point for your first role: structure, skills, and what to leave out.',read:'6 min read',checklist:['Lead with the role or study path you want.','Use clear headings and reverse-chronological experience.','Describe projects, volunteering and responsibilities with concrete examples.','Check names, dates and contact details before sharing.'],status:'published',createdAt:daysAgo(6)},
  {id:'guide-interview',category:'Interviews',title:'Prepare for your first interview',copy:'Practical ways to research an organisation, shape your examples, and arrive ready to ask questions.',read:'5 min read',checklist:['Read the role description and note what matters.','Prepare two brief examples of how you solve problems.','Plan a few thoughtful questions for the interviewer.','Confirm the time, format and travel details.'],status:'published',createdAt:daysAgo(5)},
  {id:'guide-safe-applications',category:'Applications',title:'Apply safely and with confidence',copy:'Check sources, spot fee requests, and keep track of the details you share with a prospective employer.',read:'4 min read',checklist:['Check the URL from an independent organisation website.','Never pay a fee to access or apply for an opportunity.','Be careful with identity or bank details before confirming legitimacy.','Keep a record of what you share and where.'],status:'published',createdAt:daysAgo(4)},
];

const seeds: Opportunity[] = [
  { id:'op-meridian-dev',title:'Junior Software Developer',organisation:'Illustrative · Meridian Tech',type:'Graduate programme',province:'Western Cape',city:'Cape Town',locationType:'Hybrid',industry:'Information technology',qualification:'Diploma or degree',experience:'Entry level',paidStatus:'Paid',stipend:'R18,500 per month (illustrative)',closingDate:dateIn(8),description:'A sample graduate pathway focused on building digital services and learning alongside an experienced product team.',requirements:'Diploma or degree in Computer Science, IT or a related field. Familiarity with JavaScript and collaborative projects.',responsibilities:'Contribute to small product features, take part in code reviews, and document your learning.',benefits:'Illustrative monthly stipend and structured mentorship.',howToApply:'Review the opportunity details carefully. This demo does not accept applications.',sourceUrl:'https://example.org/illustrative-opportunity',sourceStatus:'Illustrative source · not verified',status:'published',createdAt:daysAgo(3),featured:true },
  { id:'op-ndlovu-bursary',title:'Undergraduate STEM Bursary',organisation:'Illustrative · Ndlovu Foundation',type:'Bursary',province:'National',city:'South Africa',locationType:'National',industry:'Science',qualification:'Grade 12 / Matric',experience:'No experience',paidStatus:'Not applicable',stipend:'Study support (illustrative)',closingDate:dateIn(14),description:'A sample study-support listing to demonstrate bursary discovery and eligibility details.',requirements:'South African student pursuing an undergraduate qualification in a STEM field. Example criteria only.',responsibilities:'Maintain satisfactory academic progress and provide annual results.',benefits:'Illustrative tuition support; conditions would require confirmation from an actual source.',howToApply:'This is a fictional sample listing; no application can be submitted.',sourceUrl:'https://example.org/sample-bursary',sourceStatus:'Illustrative source · not verified',status:'published',createdAt:daysAgo(2),featured:true },
  { id:'op-kwezi-people',title:'People & Culture Intern',organisation:'Illustrative · Kwezi Consulting',type:'Internship',province:'Gauteng',city:'Johannesburg',locationType:'On-site',industry:'Human resources',qualification:'Diploma',experience:'No experience',paidStatus:'Stipend',stipend:'R7,200 per month (illustrative)',closingDate:dateIn(4),description:'A fictional entry-level internship example for people interested in organisational culture and workplace learning.',requirements:'Diploma in HR, psychology or a related field; clear written communication.',responsibilities:'Support recruitment coordination, onboarding, and learning activities.',benefits:'Illustrative monthly stipend and practical experience.',howToApply:'No application portal is active in this demo.',sourceUrl:'https://example.org/sample-internship',sourceStatus:'Illustrative source · not verified',status:'published',createdAt:daysAgo(1),featured:false },
  { id:'op-umoya-eng',title:'Engineering Bursary',organisation:'Illustrative · Umoya Energy',type:'Bursary',province:'Eastern Cape',city:'Gqeberha',locationType:'National',industry:'Engineering',qualification:'Degree',experience:'No experience',paidStatus:'Not applicable',stipend:'Study support (illustrative)',closingDate:dateIn(22),description:'A sample bursary listing for an engineering student exploring possible study funding.',requirements:'Enrolled in an engineering degree; all example requirements must be confirmed from a real source.',responsibilities:'Academic progress requirements are illustrative only.',benefits:'Illustrative study support.',howToApply:'This opportunity is a prototype record and cannot receive an application.',sourceUrl:'https://example.org/sample-engineering',sourceStatus:'Illustrative source · not verified',status:'published',createdAt:daysAgo(5),featured:false },
  { id:'op-sisonke-learn',title:'Digital Skills Learnership',organisation:'Illustrative · Sisonke Labs',type:'Learnership',province:'KwaZulu-Natal',city:'Durban',locationType:'Hybrid',industry:'Information technology',qualification:'Grade 12 / Matric',experience:'No experience',paidStatus:'Stipend',stipend:'R5,500 per month (illustrative)',closingDate:dateIn(2),description:'A fictional learning programme combining foundational digital skills with workplace exposure.',requirements:'Matric certificate and interest in digital careers. Sample eligibility only.',responsibilities:'Complete learning modules and participate in supported project work.',benefits:'Illustrative training and stipend.',howToApply:'The listing is a local prototype sample with no active application channel.',sourceUrl:'https://example.org/sample-learnership',sourceStatus:'Illustrative source · not verified',status:'published',createdAt:daysAgo(4),featured:false },
  { id:'op-mzansi-finance',title:'Graduate Trainee — Finance',organisation:'Illustrative · Mzansi Capital',type:'Graduate programme',province:'Gauteng',city:'Johannesburg',locationType:'On-site',industry:'Finance',qualification:'Degree',experience:'Entry level',paidStatus:'Paid',stipend:'R16,800 per month (illustrative)',closingDate:dateIn(1),description:'A sample finance graduate role designed to demonstrate deadline and opportunity details.',requirements:'Finance, accounting or economics degree; example requirements only.',responsibilities:'Rotate through finance teams and support reporting tasks.',benefits:'Illustrative remuneration and mentorship.',howToApply:'No real application will be submitted from InternSA demo.',sourceUrl:'https://example.org/sample-finance',sourceStatus:'Illustrative source · not verified',status:'published',createdAt:daysAgo(6),featured:false },
  { id:'op-ubuntu-remote',title:'Junior Content Assistant',organisation:'Illustrative · Ubuntu Media Studio',type:'Entry-level job',province:'National',city:'South Africa',locationType:'Remote',industry:'Marketing',qualification:'Certificate',experience:'Entry level',paidStatus:'Paid',stipend:'R12,400 per month (illustrative)',closingDate:dateIn(19),description:'A fictional remote content role for an early-career candidate who enjoys clear, useful communication.',requirements:'Writing samples and a relevant certificate or equivalent portfolio.',responsibilities:'Prepare short digital content, proofread, and coordinate with a small editorial team.',benefits:'Illustrative remote work arrangement.',howToApply:'Use this sample only to explore the interface; application links are not live.',sourceUrl:'https://example.org/sample-content-role',sourceStatus:'Illustrative source · not verified',status:'published',createdAt:daysAgo(7),featured:false }
];
const seedActivity: Activity[] = [
  {id:'seed-a1',kind:'view',opportunityId:'op-meridian-dev',createdAt:daysAgo(6)},
  {id:'seed-a2',kind:'search',term:'internship',createdAt:daysAgo(5)},
  {id:'seed-a3',kind:'save',opportunityId:'op-ndlovu-bursary',createdAt:daysAgo(4)},
  {id:'seed-a4',kind:'view',opportunityId:'op-kwezi-people',createdAt:daysAgo(3)},
  {id:'seed-a5',kind:'search',term:'graduate programme',createdAt:daysAgo(2)},
  {id:'seed-a6',kind:'share',opportunityId:'op-umoya-eng',createdAt:daysAgo(1)}
];
export function initialStore(): Store {
  return { version:1, opportunities:seeds, guides:guideSeeds, applyIntents:[], savedIds:['op-ndlovu-bursary'], reports:[], profile:{name:'',province:'Gauteng',qualification:'',interests:[]},activity:seedActivity };
}
export function readStore(): Store {
  try {
    const raw=localStorage.getItem(KEY);
    if(!raw) return initialStore();
    const parsed=JSON.parse(raw) as Partial<Store>;
    if(parsed.version!==1 || !Array.isArray(parsed.opportunities)) return initialStore();
    return {...initialStore(),...parsed,guides:Array.isArray(parsed.guides)?parsed.guides:guideSeeds};
  } catch { return initialStore(); }
}
export function writeStore(value: Store) {
  try { localStorage.setItem(KEY,JSON.stringify(value)); } catch { /* Demo remains usable for this session if storage is unavailable. */ }
}
export const makeId = uid;
export const today = () => formatDate(new Date());
export function daysUntil(date: string) {
  const [year, month, day] = date.split('-').map(Number);
  if (!year || !month || !day) return Number.POSITIVE_INFINITY;
  const now = new Date();
  const todayUtc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const targetUtc = Date.UTC(year, month - 1, day);
  return Math.round((targetUtc - todayUtc) / 86400000);
}
export function isLive(item: Opportunity) { return item.status==='published' && daysUntil(item.closingDate)>=0; }
export const provinces = ['Eastern Cape','Free State','Gauteng','KwaZulu-Natal','Limpopo','Mpumalanga','Northern Cape','North West','Western Cape','National'];
export const types = ['Internship','Graduate programme','Entry-level job','Learnership','Bursary','Government programme','YES Programme','Other'];
export const emptyOpportunity = (): Opportunity => ({id:'',title:'',organisation:'Illustrative · ',type:'Internship',province:'Gauteng',city:'',locationType:'On-site',industry:'Other',qualification:'Any qualification',experience:'No experience',paidStatus:'Not specified',stipend:'',closingDate:dateIn(21),description:'',requirements:'',responsibilities:'',benefits:'',howToApply:'',sourceUrl:'https://example.org/illustrative-listing',sourceStatus:'Illustrative source · not verified',status:'draft',createdAt:new Date().toISOString(),featured:false});
export const emptyGuide = (): Guide => ({id:'',title:'',category:'Career skills',copy:'',read:'5 min read',checklist:[],status:'draft',createdAt:new Date().toISOString()});
