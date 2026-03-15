layout: post
title: "Your Call May Be Recorded (In Perpetuity)"
date: YYYY-MM-DD hh:mm:ss -0000
categories: AI

### Context
It's Friday afternoon, and we have our weekly All-Hands call. My manager notifies us that going forward, at multiple points throughout the day, we must record ourselves talking in an empty Zoom chat for [Chorus AI](https://www.zoominfo.com/products/chorus?ch_source=chorus) to provide a transcript.

Management sees this as a workforce amplifier. Less typing for us to submit our notes!

I see this as micromanagement, indirect insider threat risk, and data leakage. To prove this point, I read through the Privacy Policy. And then I went through the policies of similar services to see if any of those were better.

And then my daughter got sick. Nothing serious, just a fever for 3 days in a row. I took her into the local urgent care and imagine my surprise when the doctor walked in with an iPhone in hand showing me a webpage of their back-end to tell me he’s “recording audio for note taking.” Then he proceeds to use an [AI powered Stethoscope](https://www.ekohealth.com/products/core-500-digital-stethoscope) that’s [not for use on minors](https://cdn.shopify.com/s/files/1/0715/6111/files/Eko_CORE_500_Digital_Stethoscope_FDA_Clearance_Statement_K230111_bb971e1d-1c17-440d-998b-aed94c0350f6.pdf?v=1712762480).

I’m **not** okay. [I’m having a moment](https://youtu.be/1acWg-c5Buo?t=8). I’ve been having a moment for some time.

This is the straw that broke the camels back and triggered me into making a blog post about it. It’s not just my workplace hamfisting their wait into AI. It’s not just my voice being recorded and reused to train models; a digital version of me babbling on for infinity. It’s now my daughter’s voice, too. Because some _other_ executives hamfisted _their_ way into AI. Not even good AI, at that. I can respect a well made tech stack and process. Using AI for transcriptions is just slop. We've had low-power dictation software on-devices for quite some time. Feeding it to AI checks boxes for management, and fits neatly into one of the three common AI pitfalls: Summaries, parsing, & scoring.

Everything that follows is from my opinion, and created by me reading and summarizing. I'm not a lawyer, this is not legal advice, and I am not perfect. 

TL;DR
I don't trust the majority of AI powered Audio Transcription services; and neither should you.

#### Chorus AI / ZoomInfo
https://www.zoominfo.com/legal/privacy-policy
- Mirror: https://urlscan.io/result/019cdfd8-b9c6-72ef-add6-6793176bdfe7/dom/
https://www.zoominfo.com/legal/biometric-privacy-notice
- Mirror: https://urlscan.io/result/019cdfda-26b3-7084-a886-6fc9ebb35d52/dom/
https://www.zoominfo.com/legal/subprocessors
- Mirror: https://urlscan.io/result/019ce4ec-4742-71bf-b35d-1707c54648bb/dom/
What is ZoomInfo? Business-to-Business (B2B), Marketing, and Sales software. [Unofficial Databroker](https://joindeleteme.com/sites-we-remove-from/).

Pros:
- Dedicated biometrics privacy notice

Cons
- Automatic opt-in
- Voice printing & Digital fingerprinting
- PII & Biometrics stored until opt-out
- All information and interactions will be retrained on their AI
- Build a digital version of you to infer the business decisions you could make
- Recordings & Biometric data is freely shared at their discretion
- Anyone given permission at your work, may have full access to all employee & customer biometric data
- Retention is indefinite unless opted-out
- Longest listing of sub-processors :)

I'm biased. In 2020 when ZoomInfo was [acquired](https://www.zoominfo.com/about/acquisitions/zoominfo) and [went public](https://ir.zoominfo.com/news-releases/news-release-details/zoominfo-announces-pricing-its-initial-public-offering), they dramatically changed their business tactics. I was working at a Security Operations Center for a medium-sized Bank. Every week we'd get 400-800 emails _delivered_ targeting our colleagues. Even more emails bounced at the email gateway and were undeliverable. These emails were Opt-Out Notices. [And](https://www.reddit.com/r/privacy/comments/hmaanz/zoominfo_data_collection_notice/) [they](https://www.reddit.com/r/privacy/comments/rdh9u4/removing_zoominfo_account_i_didnt_create/) [were](https://www.reddit.com/r/privacy/comments/1chd31s/how_to_prevent_my_info_from_being_used_by_the/) [pretty](https://learn.microsoft.com/en-us/answers/questions/5080448/why-i-received-zoominfo-personal-information-proce) [damn](https://support.york.ac.uk/s/article/ZoomInfo-Opt-Out) [annoying](https://kb.wisc.edu/helpdesk/142397).

When ZoomInfo runs their email campaigns, if the email is delivered then they create a public-facing profile of you, listing your employer and industry. If the email bounces and cannot deliver, then they do not make the account/profile. While they may be a B2B Sales company, this is the [same tactics Hackers, _Adversaries_, and APTs use](https://emailsecurity.fortra.com/blog/how-bec-scammers-validate-new-targets-blank-emails). Find working emails, build a list. The baddies will sell the information on the dark web, or hit you hard with a phishing campaign. ZoomInfo adds you to their database against your will. This tactic is unethical, even if their emails are [CAN-SPAM compliant](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business).

I blocked at the email gateway. Oops, all bounces. No more deliveries. No more phishing reports. No more colleagues being listed on the open internet without their consent. Their newest efforts with AI transcription show they have not gotten any better. Not only are you and your colleagues digitally finger-printed, voice-printed... but your customers are as well.

ZoomInfo is the worst of the worst; They profit from the services they sell you. It's right in the Privacy Policy, [clear as purple crayon](https://youtu.be/-BZk9MQa0YA?t=197).

#### Fellow AI
https://fellow.ai/privacy-policy
- Mirror: https://urlscan.io/result/019cdfdd-b63e-72e2-a181-54e14dc2ebe7/dom/
https://fellow.ai/fellow-app-sub-processors
- Mirror: https://urlscan.io/result/019cdfdf-0e69-7748-a056-9437385e5f85/dom/
What is Fellow? Multi-purpose AI note-taking, with an emphasis on Business-to-Business (B2B), Marketing, and Sales.

Pros
- Toggleable AI settings
- Detailed, public listing of sub-processors and AI sub-processors (GDPR requirement)
- Biometrics is anonymized for processing
- No one at your work may access Biometric data unless they were part of the interaction
- Retention is extremely limited in scope

Cons
- Uses Assembly.ai for transcription

I'm not a lawyer, though as a layman that enjoys reading privacy policies... This is one of the best ones out there. Tied with fireflies. I like that they anonymize before processing.

#### Fireflies
https://fireflies.ai/privacy-policy
- Mirror: https://urlscan.io/result/019ce037-7278-72bc-b409-209853573b4c/dom/
https://trust.fireflies.ai/subprocessors
- Mirror: https://urlscan.io/result/019ce03a-f029-703e-8c74-47a3d4c29d84/dom/
What is Fireflies? Multi-purpose AI note-taking, with an emphasis on Business-to-Business (B2B), Marketing, and Sales.

Pros
- Will not use personal information to train AI; Contractually prohibits third-parties from training AI on your information
- Hints at having internal AI
- Detailed, public listing of sub-processors and AI sub-processors (GDPR requirement)
- Third-parties transcribe but cannot identify; Fireflies does not transcribe
- Biometric data is deleted after use, or within 3 years
- "Zero Data Retention" policy; They do not want to train AI on your meetings

Cons
- Uses Assembly.ai for transcription

Tied for best service with Fellow.ai - I think this one is above the competition due to their anti-identification stance. The rest of the services that I sampled fall dramatically short. It gets boring from here unless you're really interested: You have been warned.

#### GoTranscript
https://gotranscript.com/privacy
- Mirror: https://urlscan.io/result/019cdfe0-b154-70ba-afd8-13572af1e0f0/dom/
What is GoTranscript? Transcriptions and Captioning services.

Pros:
- Provides a contract on the Privacy page to have GoTranscript Agree not to use AI when providing you services

Cons
- Non-Use AI contract is opt-out only
- Does not directly state how/where/why they use AI
- Non-Use AI contract states they will train, develop, and test AI with your data
- Does not recognize voice as biometric data
- Extremely short and vague Privacy Policy (eg, "need to know" for data access)

#### Revenue.io
https://www.revenue.io/privacy-policy
- Mirror: https://urlscan.io/result/019cdfea-5f75-7740-909c-cb4ceae6837b/dom/
https://www.revenue.io/ai-addendum
- Mirror: https://urlscan.io/result/019cdfea-7a35-753d-9818-ffc85b921e9a/dom/
https://www.revenue.io/msa
- Mirror: https://urlscan.io/result/019cdfea-95d1-75f9-8721-48b3a0900ad0/dom/
https://www.revenue.io/subprocessors
- Mirror: https://urlscan.io/result/019cdff1-3c7c-72da-b8b4-0aca2cab3a9a/dom/
What is Revenue.io? Business-to-Business (B2B), Marketing, and Sales software.

Pros
- Detailed, public listing of sub-processors and AI sub-processors (GDPR requirement)
- Some AI features are toggleable in settings
- Honesty about not having their own AI stack

Cons
- Openly admits to not having proprietary, in-house, or on-premises AI
- Will anonymize your data... to create Synthetic data
- Does not recognize voice as biometric data

#### Otter.ai
https://otter.ai/privacy-policy
- Mirror: https://urlscan.io/result/019cdff3-df6f-722a-b0fd-7e65352329de/dom/
What is Otter.ai? Multi-purpose AI note-taking.

Pros
- Proprietary AI
- Anonymized audio recordings
- Must obtain permission before manually reviewing audio recordings
- Obfuscates PII before deleting
- Indirectly lists sub-processors

Cons
- Indirectly lists sub-processors
- No timeline regarding retention
- Does not recognize voice as biometric data

#### Vook
https://www.vook.ai/en/privacy-policy
- Mirror: https://urlscan.io/result/019cdffc-0259-704e-a1e6-22e52b4ad3de/dom/
What is Vook? AI Transcription services.

Pros
- May store your own encryption key, so Vook cannot access your data
- Only uses Google Gemini for AI transcription

Cons
- If Vook stores your encryption key, with explicit consent they will use your encryption key to access all data
- Promises Google Gemini for AI transcription "is never used to train third-party AI models and is deleted immediately after..."
- Does not recognize voice as biometric data

#### Read.ai
https://www.read.ai/privacy-policy
- Mirror: https://urlscan.io/result/019ce001-1551-7425-8b60-9b3cc7650e93/dom/
What is Read.ai? Multi-purpose AI note-taking.

Pros
- Direct account integrations (eg, Google Workspaces) will not send data to third-party AI tools

Cons
- Read.ai will send your data to third-party AI tools
- Sells anonymized data
- Does not recognize voice as biometric data
- Anyone given permission at your work, may have full access to all employee & customer biometric data

#### Assembly.ai
https://www.assemblyai.com/legal/privacy-policy
- Mirror: https://urlscan.io/result/019ce008-b7d3-76de-8023-02352468388e/dom/
https://app.vanta.com/assemblyai/trust/7n80syl8zln1bn1qm3x8eg/subprocessors
- Mirror: https://urlscan.io/result/019ce00a-24b1-71bb-8088-78cc3516bbc5/
What is Assembly.ai? Voice-specific AI model seller.

Pros
- Technically won't use Biometric data without consent
- Anonymizes your data when selling to third-parties, training AI

Cons
- Doesn't recognize Biometric data as a topic / area of concern
- Does not recognize voice as biometric data
- Uses your data at-will; Majority of references state your data will be used for "the Services," which are loosely defined as "... the Platform, related support services, other products and services..."
- Will deny PII deletion if it "involves disproportionate effort"

#### Momentum
https://www.momentum.io/privacy-policy
- Mirror: https://urlscan.io/result/019ce016-16e5-76f7-9542-8b8edc8f24c4/dom/
https://www.momentum.io/security
- Mirror: https://urlscan.io/result/019ce016-7f73-74f4-ba8c-9ddbdcb97a07/dom/
What is Momentum? Multi-purpose AI note-taking, with an emphasis on Business-to-Business (B2B), Marketing, and Sales.

Pros
- Anonymizes data for training

Cons
- Access to data privacy policy, biometrics privacy policy, etc. is backed behind a Customer Agreement
- Public-facing policies are too short (eg, no sub-processors listed)
- Doesn't recognize Biometric data as a topic / area of concern
- Does not recognize voice as biometric data
- No AI disclosures

#### Gong
https://www.gong.io/legal/privacy-policy
- Mirror: https://urlscan.io/result/019ce01b-a1db-7612-9f39-5c61681b30ab/dom/
https://www.gong.io/legal/data-processing-addendum
- Mirror: https://urlscan.io/result/019ce01c-3564-7226-86ca-5a7e50378d92/dom/
https://trust.gong.io/
- Mirror: https://urlscan.io/result/019ce01c-5d2e-7143-83a0-1ccdd9ddaf42/dom/
https://www.gong.io/legal/sub-processors
- Mirror: https://urlscan.io/result/019ce026-27de-7032-b3a2-1fe21e2c865a/dom/
What is Gong? Business-to-Business (B2B), Marketing, and Sales platform powered by AI.

Pros
- Easily readable policies
- Detailed, public listing of sub-processors and AI sub-processors (GDPR requirement)

Cons
- Detailed policies are blocked behind account creation
- Contradictory claims: They do not collect, use, or disclose sensitive (eg, biometric) information; like with their voice identification feature that uses sensitive (biometric) information
- Allows their employees access to your sensitive information at their discretion
- No timeline regarding retention
- Sells anonymized data

#### Clari
https://www.clari.com/privacy/#artificial-intelligence
- Mirror: https://urlscan.io/result/019ce029-dfc4-7607-9980-402007f947ff/dom/
https://www.clari.com/gdpr/#sub-processors
- Mirror: https://www.clari.com/gdpr/#sub-processors
https://www.clari.com/dpa/2025-06-01/
- Mirror: https://urlscan.io/result/019ce02e-3305-7060-b76f-36068bc1a75d/dom/
What is Clari? Business-to-Business (B2B), Marketing, and Sales platform powered by AI.

Pros
- Detailed, public listing of sub-processors and AI sub-processors (GDPR requirement)

Cons
- Detailed AI Policy is behind an Addendum that is seemingly not public-facing
- Second longest listing of sub-processors :)
- Doesn't recognize Biometric data as a topic / area of concern
- Does not recognize voice as biometric data

#### Avoma
https://www.avoma.com/privacy-policy
- Mirror: https://urlscan.io/result/019ce02f-adb4-778f-ba32-01ae93d82f60/dom/
https://trust.avoma.com/
- Mirror: https://urlscan.io/result/019ce02f-debf-76fe-bf34-ca6ab3f10221/dom/
https://trust.avoma.com/subprocessors
- Mirror: https://urlscan.io/result/019ce034-431a-7518-be22-ec42e601bd17/dom/
https://www.avoma.com/data-processing-addendum
- Mirror: https://urlscan.io/result/019ce032-4837-7659-8b7f-9880f2d116a0/dom/
What is Avoma? Multi-purpose AI note-taking, with an emphasis on Business-to-Business (B2B), Marketing, and Sales.

Pros
- Direct account integrations (eg, Google Workspaces) will not send data to third-party AI tools

Cons
- Avoma will send your data to third-party AI tools
- Sells anonymized data
- No timeline regarding retention
- Does not directly state how/where/why they use AI
- More detailed policies are blocked behind account creation
- Doesn't recognize Biometric data as a topic / area of concern
- Does not recognize voice as biometric data

---
### Key Takeaways
1) While I may not be covered under GDPR, the regulations require more documentation (eg, sub-processors) which is monumental in understanding how these services operate.
	1) I cannot state how thankful I am that some of these companies adhere to GDPR and therefore must be more transparent in their operations.
2) None of them openly state they are rolling their own internal Agentic AI
3) Data is generally anonymized, unless it suits the business needs (eg, ZoomInfo)
4) Principal of Least Privileged be damned; The majority of these services let the Account Administrator(s) have free reign over all employee biometric data.
5) Boilerplate: The more generic and vague a company is (eg, "the Services", no hard retention timeline) the less I inherently trust the company.
6) Calling it what it is: Voice and Likeness/Face is considered Biometric Data. If you're handling Biometric data, you need to call this out in your policies. This is another form of PII.

### Primary Argument: Workforce Amplification
I work with Security Orchestration, Automation, and Response (SOAR) platforms. I've made a SOAR platform. I script for fun.
My work and personal life revolves around cosplaying as a programmer. I make reliable scripts that speed up day-to-day, business-specific tasks. The department I helped create, for creating and managing a SOAR platform, used my marketing term on KPIs: Workforce Amplifier.
AI is the evolved form of Workforce Amplification. **Only if you do it right.** Otherwise it becomes inefficient, expensive, unpredictable, and slow software - This is slop.

### Identifying Slop
AI done well means having Agents perpetually learning (on anonymized data). The data input/processing/output is extremely consistent, and gradually gets better.

AI Slop, as defined by me, is when you're using an off-the-shelf LLM for a specific use-case. The data input/processing/output is NOT consistent, and stagnates. Easiest method of implementation boils down to three use-cases:
1) Summaries
2) Parsing
3) Scoring

All of these services are AI Slop. No custom AI stack. Nothing revolutionary. Rehash of existing LLM use-cases. At least with a service like Fellow.ai or Fireflies, I know they're taking on the risk and legal burden for partnering with Assembly.ai.

---
