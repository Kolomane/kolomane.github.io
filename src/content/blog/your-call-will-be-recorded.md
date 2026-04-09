---
title: "Your Call Will Be Recorded (In Perpetuity)"
description: "I read the privacy policies of 18~ AI audio transcription services. The findings are not great."
pubDate: 2026-04-09
tags: ["privacy", "AI", "security", "biometrics", "PII", "PHI"]
---

### Context

It's Friday afternoon, and we have our weekly All-Hands call. My manager notifies us that going forward, at multiple points throughout the day, we must record ourselves talking in an empty Zoom chat for [Chorus AI](https://www.zoominfo.com/products/chorus?ch_source=chorus) to provide a transcript. "For note taking."

Management sees this as a workforce amplifier. Less typing for us to submit our notes.

I see it differently. I spent three years in Physical Security before I could break into Cybersecurity — bank locksmith, access controls, CCTV. You learn what biometric data means when you're the one installing the readers, or telling executives you won't enable audio-recording for privacy reasons. Consent forms, retention schedules, who has access to the logs. Voice is biometric. "Note taking" is a skin on a data collection pipeline, and I've built enough pipelines to know the difference.

So I read the privacy policy of ZoomInfo/ChorusAI. And then I went through the policies of similar services to see if any of those were better.

And then my daughter got sick. Nothing serious, just a fever for three days. I took her into the local urgent care and imagine my surprise when the doctor walked in with an iPhone showing me a back-end webpage, telling me he's "recording audio for note taking." Then he used an [AI-powered stethoscope](https://www.ekohealth.com/products/core-500-digital-stethoscope).

My daughter is 8. I did not consent to either of us being recorded, or to the AI stethoscope. [FDA clearance K230111](https://cdn.shopify.com/s/files/1/0715/6111/files/Eko_CORE_500_Digital_Stethoscope_FDA_Clearance_Statement_K230111_bb971e1d-1c17-440d-998b-aed94c0350f6.pdf?v=1712762480), Page 4: the AI analysis software is not cleared for use on patients under 18. I looked it up myself — standing in the exam room, while he was talking.

I'm **not** okay. [I'm having a moment](https://youtu.be/1acWg-c5Buo?t=8). I've been having a moment for some time.

This is the straw that broke the camel's back. It's not just my workplace hamfisting their way into AI. It's not just my voice being recorded and fed into a model that will synthesize it — generating audio that sounds exactly like me, saying things I never said, indefinitely. It's my daughter's voice too. Because some _other_ executives hamfisted _their_ way into AI. Not even good AI. I can respect a well-made tech stack and process. Using AI for transcriptions is slop. We've had low-power on-device dictation for years. We've had pen and paper for even longer. Feeding audio to a third-party AI pipeline checks boxes for management, and fits neatly into one of three common AI pitfalls: Summaries, Parsing, & Scoring.

**Everything that follows is my opinion. I'm not a lawyer, this is not legal advice, and I am not perfect.**

**TL;DR:** I don't trust the majority of AI-powered Audio Transcription services; and neither should you.

---

### Methodology

I started as a Cybersecurity analyst and automated my way out of the role — built scripts, built processes, eventually built a SOAR platform and found myself maintaining it as a SOAR Engineer. I now work for a Hyperautomation AI Platform, building AI agents and workflows. There's context on how I know what good automation looks like, and how I know what slop looks like.

I picked these services because they came up directly in my situation — my employer, my doctor, or platforms in the same ecosystem. For each one I read the privacy policy, the biometric notice if it existed, the sub-processor list if public, any Data Processing Agreements (DPAs), and any AI addendums. Same criteria for all of them: do they classify voice as biometric data, who are they sharing it with, and did you actually consent — or were you just never told you could object?

---

### The Services

#### Chorus AI / ZoomInfo

- [Privacy Policy](https://www.zoominfo.com/legal/privacy-policy) — [Mirror](https://urlscan.io/result/019cdfd8-b9c6-72ef-add6-6793176bdfe7/dom/)
- [Biometric Privacy Notice](https://www.zoominfo.com/legal/biometric-privacy-notice) — [Mirror](https://urlscan.io/result/019cdfda-26b3-7084-a886-6fc9ebb35d52/dom/)
- [Sub-processors](https://www.zoominfo.com/legal/subprocessors) — [Mirror](https://urlscan.io/result/019ce4ec-4742-71bf-b35d-1707c54648bb/dom/)

What is ZoomInfo? Business-to-Business (B2B), Marketing, and Sales software. [Unofficial "Databroker"](https://joindeleteme.com/sites-we-remove-from/).

| | |
|---|---|
| Voice classified as biometric | ✅ Dedicated notice |
| Sub-processors public | ✅ Yes |
| Trains AI on your data | 🔴 Yes — everything |
| Opt model | 🔴 Opt-out (automatic opt-in) |
| Retention | 🔴 Indefinite until opt-out |
| Data sold or shared | 🔴 Yes — at their discretion |
| Admin access to all employee biometrics | 🔴 Yes — unrestricted |
| Actual Voice Processor | ⚠️ Unclear |
| Age Minimum | ⚠️ 16 |

- Voice printing, digital fingerprinting, and behavioral profiling — including inferred business decisions
- Customer biometrics collected right alongside employee biometrics
- Longest sub-processor list of any service reviewed :)
- Only GDPR-compliant provider that doesn't state who processes audio transcriptions and biometric data

I'm biased. In 2020 when ZoomInfo was [acquired](https://www.zoominfo.com/about/acquisitions/zoominfo) and [went public](https://ir.zoominfo.com/news-releases/news-release-details/zoominfo-announces-pricing-its-initial-public-offering), they dramatically changed their business tactics. I was working at a Security Operations Center for a medium-sized Bank. Every week we'd get 400-800 emails _delivered_ targeting our colleagues. Even more emails bounced at the email gateway and were undeliverable. These emails were Opt-Out Notices. [And](https://www.reddit.com/r/privacy/comments/hmaanz/zoominfo_data_collection_notice/) [they](https://www.reddit.com/r/privacy/comments/rdh9u4/removing_zoominfo_account_i_didnt_create/) [were](https://www.reddit.com/r/privacy/comments/1chd31s/how_to_prevent_my_info_from_being_used_by_the/) [pretty](https://learn.microsoft.com/en-us/answers/questions/5080448/why-i-received-zoominfo-personal-information-proce) [damn](https://support.york.ac.uk/s/article/ZoomInfo-Opt-Out) [annoying](https://kb.wisc.edu/helpdesk/142397).

When ZoomInfo runs their email campaigns, if the email is delivered then they create a public-facing profile of you, listing your employer and industry. If the email bounces and cannot deliver, then they do not make the account/profile. While they may be a B2B Sales company, these are the [same tactics Hackers, _Adversaries_, and APTs use](https://emailsecurity.fortra.com/blog/how-bec-scammers-validate-new-targets-blank-emails). Find working emails, build a list. These baddies will sell the information on the dark web, or hit you hard with a phishing campaign. ZoomInfo, on the other hand, adds you to their database against your will. This tactic is unethical, even if their emails are [CAN-SPAM compliant](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business).

I blocked them at the email gateway. Oops, all bounces. No more deliveries. No more phishing reports. No more colleagues being listed on the open internet without their consent. Their newest efforts with AI transcription show they have not gotten any better. Not only are you and your colleagues digitally finger-printed, voice-printed... but your customers are as well.

ZoomInfo is the worst of the worst; they profit from the services they sell you. It's right in the Privacy Policy, [clear as purple crayon](https://youtu.be/-BZk9MQa0YA?t=197).

---

#### Fireflies

- [Privacy Policy](https://fireflies.ai/privacy-policy) — [Mirror](https://urlscan.io/result/019ce037-7278-72bc-b409-209853573b4c/dom/)
- [Sub-processors](https://trust.fireflies.ai/subprocessors) — [Mirror](https://urlscan.io/result/019ce03a-f029-703e-8c74-47a3d4c29d84/dom/)

What is Fireflies? Multi-purpose AI note-taking, with an emphasis on B2B, Marketing, and Sales.

| | |
|---|---|
| Voice classified as biometric | ✅ Yes |
| Sub-processors public | ✅ Yes (GDPR) |
| Trains AI on your data | ✅ No — contractually prohibited |
| Opt model | ⚠️ Opt-out of AI features |
| Retention | ✅ Biometric: deleted after use or within 3 years |
| Data sold or shared | ✅ No |
| Admin access to all employee biometrics | ✅ No |
| Actual Voice Processor | ⚠️ Assembly.ai (OpenAI & Gemini) |
| Age Minimum | ✅ 18 |

- Third parties handle transcription but cannot re-identify; Fireflies doesn't transcribe directly
- Contractual prohibition on third-party training — policy vs. contractual liability is a meaningful difference
- "Zero Data Retention" stance — explicit about not wanting your meeting data long-term
- Uses Assembly.ai for transcription

As a layman who enjoys reading privacy policies, this is one of the best ones out there. The anti-identification contractual stance is what separates it — anyone can write a policy. Contractual liability is a different thing entirely.

---

#### Fellow AI

- [Privacy Policy](https://fellow.ai/privacy-policy) — [Mirror](https://urlscan.io/result/019cdfdd-b63e-72e2-a181-54e14dc2ebe7/dom/)
- [Sub-processors](https://fellow.ai/fellow-app-sub-processors) — [Mirror](https://urlscan.io/result/019cdfdf-0e69-7748-a056-9437385e5f85/dom/)

What is Fellow? Multi-purpose AI note-taking, with an emphasis on B2B, Marketing, and Sales.

| | |
|---|---|
| Voice classified as biometric | ✅ Yes |
| Sub-processors public | ✅ Yes (GDPR) |
| Trains AI on your data | ⚠️ Anonymized only |
| Opt model | ⚠️ Toggleable |
| Retention | ✅ Limited in scope |
| Data sold or shared | ✅ No |
| Admin access to all employee biometrics | ✅ No — scoped to interaction participants only |
| Actual Voice Processor | ⚠️ Assembly.ai (OpenAI & Gemini) |
| Age Minimum | 🔴⚠️ 13 ❌ Against Assembly.ai & Gemini* Policies |

- Biometrics anonymized before processing, not after
- Uses Assembly.ai for transcription

Almost tied with Fireflies. Age restriction is definitely the weirdest of these privacy policies, and contractually contradictory.

---

#### GoTranscript

- [Privacy Policy](https://gotranscript.com/privacy) — [Mirror](https://urlscan.io/result/019cdfe0-b154-70ba-afd8-13572af1e0f0/dom/)

What is GoTranscript? Transcription and captioning services.

| | |
|---|---|
| Voice classified as biometric | 🔴❌ No |
| Sub-processors public | 🔴❌ No |
| Trains AI on your data | ⚠️ Yes by default; ✅ No under Non-AI contract |
| Opt model | 🔴 Opt-out |
| Retention | ⚠️ Unclear |
| Data sold or shared | ⚠️ Unclear |
| Admin access to all employee biometrics | ⚠️ Unclear |
| Actual Voice Processor | 🔴❌ Not Listed |
| Age Minimum | 🔴❌ Not Listed |

- GoTranscript's Non-AI contract is comprehensive: when signed, GoTranscript commits to zero AI involvement — no AI transcription, no training, no storage, no processing. Real humans handle everything end to end.
- The problem is that this level of protection isn't the default. It requires a separate contract, and most customers won't know to ask for it.
- Extremely short and vague public privacy policy; data access is described as "need to know" with no further definition

The Non-AI contract is exactly what it says — but you have to find it first.

---

#### Revenue.io

- [Privacy Policy](https://www.revenue.io/privacy-policy) — [Mirror](https://urlscan.io/result/019cdfea-5f75-7740-909c-cb4ceae6837b/dom/)
- [AI Addendum](https://www.revenue.io/ai-addendum) — [Mirror](https://urlscan.io/result/019cdfea-7a35-753d-9818-ffc85b921e9a/dom/)
- [MSA](https://www.revenue.io/msa) — [Mirror](https://urlscan.io/result/019cdfea-95d1-75f9-8721-48b3a0900ad0/dom/)
- [Sub-processors](https://www.revenue.io/subprocessors) — [Mirror](https://urlscan.io/result/019cdff1-3c7c-72da-b8b4-0aca2cab3a9a/dom/)

What is Revenue.io? B2B, Marketing, and Sales software.

| | |
|---|---|
| Voice classified as biometric | ⚠️ Mentioned indirectly |
| Sub-processors public | ✅ Yes (GDPR) |
| Trains AI on your data | ⚠️ Anonymized — to create synthetic data |
| Opt model | ⚠️ Toggleable (some features) |
| Retention | ⚠️ Unclear |
| Data sold or shared | ⚠️ Creates synthetic data from anonymized input |
| Admin access to all employee biometrics | ⚠️ Unclear |
| Actual Voice Processor | ⚠️ Deepgram |
| Age Minimum | ⚠️ 13 |

- Openly admits to having no proprietary, in-house, or on-premises AI — honest, at least
- Anonymization is the method, not the destination

---

#### Otter.ai

- [Privacy Policy](https://otter.ai/privacy-policy) — [Mirror](https://urlscan.io/result/019cdff3-df6f-722a-b0fd-7e65352329de/dom/)

What is Otter.ai? Multi-purpose AI note-taking.

| | |
|---|---|
| Voice classified as biometric | 🔴❌ No |
| Sub-processors public | ⚠️ Indirect listing |
| Trains AI on your data | ⚠️ Anonymized (implied — proprietary AI) |
| Opt model | ⚠️ Unclear |
| Retention | 🔴 No timeline |
| Data sold or shared | ⚠️ Unclear |
| Admin access to all employee biometrics | ⚠️ Manual review requires explicit permission |
| Actual Voice Processor | 🔴❌ Not Listed |
| Age Minimum | ⚠️ 13 |

- Obfuscates PII before deletion — at least the deletion process has some care put into it
- Manual review requiring explicit permission is a floor that most of these services don't have

Mid-tier. Both of those things are more than most services offer. The missing retention timeline and no biometric classification drag it back down.

---

#### Vook

- [Privacy Policy](https://www.vook.ai/en/privacy-policy) — [Mirror](https://urlscan.io/result/019cdffc-0259-704e-a1e6-22e52b4ad3de/dom/)

What is Vook? AI transcription services.

| | |
|---|---|
| Voice classified as biometric | 🔴❌ No |
| Sub-processors public | 🔴❌ Indirectly listed |
| Trains AI on your data | ✅ No — per Google Gemini's retention policy |
| Opt model | ⚠️ Key-based (you control access) |
| Retention | ✅ Deleted after transcription (per their claim) |
| Data sold or shared | ✅ No |
| Admin access to all employee biometrics | ⚠️ Depends on who holds the encryption key |
| Actual Voice Processor | Google Gemini |
| Age Minimum | 🔴❌ Not Listed |

- You can hold your own encryption key, meaning Vook cannot access your data
- If Vook holds the key with your consent, they can access everything
- Their privacy guarantee is pinned entirely on Google Gemini's own data handling commitments — and Gemini appears as a sub-processor across multiple services in this list. It's not unique to Vook; it's becoming the default back-end for the industry.
- Vook does call out the model and tier for Gemini, which is extremely honest and up-front.

The encryption key option is either their best feature or their biggest liability. Choose accordingly — and read Gemini's policy too.

---

#### Read.ai

- [Privacy Policy](https://www.read.ai/privacy-policy) — [Mirror](https://urlscan.io/result/019ce001-1551-7425-8b60-9b3cc7650e93/dom/)

What is Read.ai? Multi-purpose AI note-taking.

| | |
|---|---|
| Voice classified as biometric | 🔴❌ No |
| Sub-processors public | 🔴❌ Not public |
| Trains AI on your data | 🔴 Yes — sends to third-party AI |
| Opt model | ⚠️ Unclear (direct integrations exempt) |
| Retention | ⚠️ Unclear |
| Data sold or shared | 🔴 Yes — sells anonymized data |
| Admin access to all employee biometrics | 🔴 Yes — full access |
| Actual Voice Processor | 🔴❌ Not Listed |
| Age Minimum | ⚠️ 16 |

- Direct account integrations (Google Workspace, etc.) receive the standard permissions expected of any account integration. The concern is that Read.ai itself, outside of those integrations, still routes data to third-party AI.

---

#### Assembly.ai

- [Privacy Policy](https://www.assemblyai.com/legal/privacy-policy) — [Mirror](https://urlscan.io/result/019ce008-b7d3-76de-8023-02352468388e/dom/)
- [Sub-processors](https://app.vanta.com/assemblyai/trust/7n80syl8zln1bn1qm3x8eg/subprocessors) — [Mirror](https://urlscan.io/result/019ce00a-24b1-71bb-8088-78cc3516bbc5/)

What is Assembly.ai? Voice-specific AI model provider — the transcription layer underneath Fellow.ai and Fireflies.

| | |
|---|---|
| Voice classified as biometric | 🔴❌ No |
| Sub-processors public | ✅ Yes (via Vanta) |
| Trains AI on your data | ⚠️ "For the Services" — loosely defined |
| Opt model | ⚠️ Consent required for biometric use (voice isn't classified as biometric, so this doesn't apply) |
| Retention | ⚠️ Unclear |
| Data sold or shared | ⚠️ Anonymized to third parties |
| Admin access to all employee biometrics | N/A — B2B API provider |
| Actual Voice Processor | Google Gemini, OpenAI |
| Age Minimum | ⚠️ 16 ❌ Against Gemini's* Policies |

- Per their GDPR sub-processor disclosures, Assembly.ai uses both Google Gemini AND OpenAI on the back-end for AI processing
- "The Services" is defined broadly enough to cover most conceivable data uses
- Will deny deletion requests if it "involves disproportionate effort"
- Worth covering because Fellow.ai and Fireflies both use Assembly.ai — their upstream contractual protections are what determine whether the better privacy policies actually mean anything at this layer
- Contractual contradiction! Well, it's up for debate since Gemini is vague with age listing 18+ for API.

---

#### Momentum

- [Privacy Policy](https://www.momentum.io/privacy-policy) — [Mirror](https://urlscan.io/result/019ce016-16e5-76f7-9542-8b8edc8f24c4/dom/)
- [Security](https://www.momentum.io/security) — [Mirror](https://urlscan.io/result/019ce016-7f73-74f4-ba8c-9ddbdcb97a07/dom/)

What is Momentum? Multi-purpose AI note-taking, with an emphasis on B2B, Marketing, and Sales.

| | |
|---|---|
| Voice classified as biometric | 🔴❌ No |
| Sub-processors public | 🔴❌ No — behind a Customer Agreement |
| Trains AI on your data | ⚠️ Anonymized |
| Opt model | ⚠️ Unclear |
| Retention | ⚠️ Unclear |
| Data sold or shared | ⚠️ Unclear |
| Admin access to all employee biometrics | ⚠️ Unclear |
| Actual Voice Processor | 🔴❌ Not Listed |
| Age Minimum | ✅ 18 |

- No AI disclosures on public-facing policies
- The policies that actually matter — biometrics, AI, sub-processors — are behind a Customer Agreement

When the policies that matter most aren't public, that's the policy.

---

#### Gong

- [Privacy Policy](https://www.gong.io/legal/privacy-policy) — [Mirror](https://urlscan.io/result/019ce01b-a1db-7612-9f39-5c61681b30ab/dom/)
- [Data Processing Addendum](https://www.gong.io/legal/data-processing-addendum) — [Mirror](https://urlscan.io/result/019ce01c-3564-7226-86ca-5a7e50378d92/dom/)
- [Trust Center](https://trust.gong.io/) — [Mirror](https://urlscan.io/result/019ce01c-5d2e-7143-83a0-1ccdd9ddaf42/dom/)
- [Sub-processors](https://www.gong.io/legal/sub-processors) — [Mirror](https://urlscan.io/result/019ce026-27de-7032-b3a2-1fe21e2c865a/dom/)

What is Gong? B2B, Marketing, and Sales platform powered by AI.

| | |
|---|---|
| Voice classified as biometric | ⚠️ Contradictory — denies collecting biometrics; offers a voice identification feature |
| Sub-processors public | ✅ Yes (GDPR) |
| Trains AI on your data | ⚠️ Sells anonymized data |
| Opt model | ⚠️ Unclear |
| Retention | 🔴 No timeline |
| Data sold or shared | 🔴 Yes — anonymized |
| Admin access to all employee biometrics | 🔴 Yes — employees at their discretion |
| Actual Voice Processor | ✅ Custom AWS Stack for AI, ⚠️ Indirectly states Gemini |
| Age Minimum | ⚠️ 16 |

- More detailed policies are behind account creation
- The contradiction is the tell: claiming not to collect sensitive or biometric data while running a voice identification feature requires some creative policy writing

---

#### Clari

- [Privacy Policy](https://www.clari.com/privacy/#artificial-intelligence) — [Mirror](https://urlscan.io/result/019ce029-dfc4-7607-9980-402007f947ff/dom/)
- [Sub-processors](https://www.clari.com/gdpr/#sub-processors)
- [DPA](https://www.clari.com/dpa/2025-06-01/) — [Mirror](https://urlscan.io/result/019ce02e-3305-7060-b76f-36068bc1a75d/dom/)

What is Clari? B2B, Marketing, and Sales platform powered by AI.

| | |
|---|---|
| Voice classified as biometric | ✅ Yes |
| Sub-processors public | ✅ Yes (GDPR) |
| Trains AI on your data | ⚠️ Unclear — AI addendum not publicly available |
| Opt model | ⚠️ Unclear |
| Retention | ⚠️ Unclear |
| Data sold or shared | ⚠️ Unclear |
| Admin access to all employee biometrics | ⚠️ Unclear |
| Actual Voice Processor | ⚠️ Assembly.ai (OpenAI & Gemini) |
| Age Minimum | ⚠️ 16 ❌ Against Gemini's* Policies |

- Second longest sub-processor list of any service reviewed :)
- GDPR compliance means they must provide a sub-processor list. Unfortunately, the actual AI policy is behind an addendum you can't access without signing in.
- Another contractual contradiction! I think we've got a bingo! Did you guess there would be three providers going against their sub-processor's age policy? I sure didn't.

---

#### Avoma

- [Privacy Policy](https://www.avoma.com/privacy-policy) — [Mirror](https://urlscan.io/result/019ce02f-adb4-778f-ba32-01ae93d82f60/dom/)
- [Trust Center](https://trust.avoma.com/) — [Mirror](https://urlscan.io/result/019ce02f-debf-76fe-bf34-ca6ab3f10221/dom/)
- [Sub-processors](https://trust.avoma.com/subprocessors) — [Mirror](https://urlscan.io/result/019ce034-431a-7518-be22-ec42e601bd17/dom/)
- [DPA](https://www.avoma.com/data-processing-addendum) — [Mirror](https://urlscan.io/result/019ce032-4837-7659-8b7f-9880f2d116a0/dom/)

What is Avoma? Multi-purpose AI note-taking, with an emphasis on B2B, Marketing, and Sales.

| | |
|---|---|
| Voice classified as biometric | 🔴❌ No |
| Sub-processors public | ✅ Yes (GDPR) |
| Trains AI on your data | 🔴 Yes — sends to third-party AI |
| Opt model | ⚠️ Unclear (direct integrations exempt) |
| Retention | 🔴 No timeline |
| Data sold or shared | 🔴 Yes — anonymized |
| Admin access to all employee biometrics | ⚠️ Unclear |
| Actual Voice Processor | ⚠️ Rev. Also listed as "AI" are: OpenAI, Anthropic AI |
| Age Minimum | ✅ 18 |


- Direct account integrations (Google Workspace, etc.) receive the standard permissions expected of any account integration. The concern is that Avoma itself still routes data to third-party AI outside of those integrations.
- More detailed policies are behind account creation

At a glance, the privacy policy reads similar to Read.ai. The direct integration carve-out creates the same false floor. Avoma at least lists their sub-processors and has a stricter age minimum.

---

#### Deepgram

- [Privacy Policy](https://deepgram.com/privacy) — [Mirror](https://urlscan.io/result/019d5f21-bfe7-75cc-a3e9-e145cc70c6cc/dom/)
- [Sub-processors](https://deepgram.com/privacy/subprocessors) — [Mirror](https://urlscan.io/result/019d5f22-32c7-72ae-b411-240e31be8501/dom/)

What is Deepgram? Multi-solution Voice & AI Software Developer. They sit in the stack as a B2B API layer — meaning other services (like Revenue.io) use Deepgram as their back-end, and Deepgram handles the actual speech processing.

| | |
|---|---|
| Voice classified as biometric | 🔴❌ No |
| Sub-processors public | ✅ Yes (GDPR) |
| Trains AI on your data | 🔴 Yes — "to operate and improve the Service" and "for any other lawful purpose" |
| Opt model | 🔴 No opt-out offered |
| Retention | 🔴 Indefinite — "for the length of time needed to fulfill our business purposes" |
| Data sold or shared | 🔴 Yes — third-party service providers; shared for marketing purposes |
| Admin access to all employee biometrics | 🔴 Yes — account administrator access to usage and account data |
| Actual Voice Processor | 🔴 OpenAI + Anthropic — both listed as sub-processors for "interactive text and audio" |
| Age Minimum | ⚠️ 13 ❌ Against Anthropic's* Policies |

The sub-processor list is where this one gets interesting. Deepgram is already a sub-processor for services like Revenue.io. Dig one layer deeper, and Deepgram's own audio processing is routed through **OpenAI and Anthropic** — both listed explicitly for "interactive text and audio." Your voice data isn't stopping at Deepgram. It continues up the chain.

That's a three-layer pipeline: your employer's transcription tool → Deepgram → OpenAI and/or Anthropic. Each hop has its own privacy policy, its own retention rules, and its own training posture. The service you signed up for is rarely the one holding your audio.

The training language is buried in boilerplate — "for any other lawful purpose" is the kind of catch-all policy lawyers include specifically so the company doesn't have to enumerate what it actually covers. That phrase is doing a lot of work.

The age minimum of 13 applies to the developer account, not to the voices in the recordings. Deepgram is a developer API, but the audio it processes comes from consumer and enterprise contexts. Whether those recordings include minors is entirely the responsibility of whoever deployed the service upstream. Similarly, the minimum of 13 would be another contractual contradiction, however the ambiguity of which AI is used means it's in a gray-zone.

---

#### Rev

- [Privacy Policy](https://www.rev.com/legal/privacy) — [Mirror](https://urlscan.io/result/019d5f21-d1a8-76fe-8709-c3844b16e18b/dom/)

What is Rev? Transcription provider; similar to GoTranscript. They hire freelancers to help transcribe (a la Amazon MTurk circa 2013~), and use AI for transcription. They appear as the Actual Voice Processor inside Avoma.

| | |
|---|---|
| Voice classified as biometric | 🔴❌ No |
| Sub-processors public | 🔴❌ No |
| Trains AI on your data | 🔴❌ Not disclosed — policy is entirely silent on AI training |
| Opt model | 🔴❌ Not offered — no mechanism described |
| Retention | 🔴 No timeline — "backups may be retained longer than original personal data" |
| Data sold or shared | ⚠️ Shares for targeted advertising — "we 'share' information to provide more relevant and tailored advertising" |
| Admin access to all employee biometrics | ⚠️ Unclear |
| Actual Voice Processor | 🔴❌ Not listed |
| Age Minimum | 🔴❌ "of majority in any jurisdiction" — no specific age, deliberately jurisdiction-dependent |

The silence on AI training is the loudest part of this policy. Rev is now heavily marketed as an AI transcription service. They process audio at scale. And their privacy policy says nothing — not a clause, not a disclosure, not even a vague "to improve the service" — about whether that audio is used to train their models. In a policy context, silence isn't neutral. It's a choice.

They used to be the gold standard of human-first transcription. Real people, accountable work. That model has shifted toward AI-first with humans as a fallback — and the privacy policy hasn't moved with it. There's no mention of whether freelancers still access AI-routed audio. No mention of what happens when a human reviewer sees a recording that was submitted for AI processing. That gap matters.

The age minimum language — "of majority in any jurisdiction" — is a legal hedge, not a policy. It means Rev has decided not to pick a number. Every other service on this list chose a specific age. Rev chose ambiguity.

The backup retention clause is worth flagging: your audio may be deleted from primary storage while still sitting in a backup somewhere, for an unspecified amount of time. "Longer than the original personal data" tells you the backup outlives the record — it doesn't tell you by how much.

---

#### The Foundation Layer: Gemini, OpenAI, and Anthropic

The services above are consumer-facing. These three aren't — but they're in every section of this post anyway. Gemini appears behind Vook, Gong, and Assembly.ai. OpenAI processes audio inside Assembly.ai, which powers Fellow.ai, Fireflies, and Clari. Anthropic and OpenAI both appear in Deepgram's sub-processor list. They're the actual floor of this industry.

If you trust your transcription vendor but haven't read their model provider's policy, you haven't read the policy.

---

#### Google Gemini

- [API Terms](https://ai.google.dev/gemini-api/terms) - [Mirror](https://urlscan.io/result/019d703d-1a7f-72c7-9419-f2379376a40d/dom/)
- [Privacy Policy](https://policies.google.com/privacy) - [Mirror](https://urlscan.io/result/019d703d-e0b9-77f4-8137-3510f46fce7a/dom/)
- [Pricing](https://ai.google.dev/gemini-api/docs/pricing#gemini-2.5-flash-preview-tts) - [Mirror](https://urlscan.io/result/019d703c-e43e-7399-bc0b-966eb450c35a/dom/)

What is Gemini? Google's large language model family, used as an AI back-end by multiple services in this list — Vook, Gong, and Assembly.ai all route data through Google Gemini.

| | |
|---|---|
| Voice classified as biometric | 🔴❌ No |
| Sub-processors public | ✅ Via Google Cloud DPA |
| Trains AI on your data | 🔴 Yes (free/unpaid tier) / ✅ No (paid API) |
| Opt model | 🔴 No opt-out on free tier — training is the price of admission |
| Retention | ⚠️ 30 days for grounding features (paid); unspecified for free tier |
| Data sold or shared | ⚠️ Human reviewers may access free-tier submissions after identifier removal |
| Admin access to all employee biometrics | N/A — model provider |
| Actual Voice Processor | ✅ In-house (Google) |
| Age Minimum | ✅ 18 (API) |

The free/paid split is the entire story with Gemini. On the paid API under a Google Cloud agreement, your data is handled as a data processor relationship — Google doesn't train on it, you retain control, and you're covered by a proper DPA. On the free tier, the terms are explicit: "Google uses the content you submit to the Services and any generated responses to provide, improve, and develop Google products and services." That's model training. No opt-out.

The services that use Gemini as a back-end aren't always transparent about which tier they're on. Vook, for example, anchors their privacy guarantee to Gemini's data handling — which is solid, *if* they're on the paid API. If they're not, that guarantee dissolves. You'd have to ask them directly.

The human review clause on the free tier is the part that should give you pause. Data submitted via unpaid services "may be read, annotated, and processed" by human reviewers — after account identifiers are removed, but before the data goes anywhere. Anonymization at the account level doesn't mean the content is anonymous. Your voice, the topic of your meeting, the name of the patient your doctor just mentioned — none of that is an account identifier.

Gemini is a weird one in that you can use their API, for free. `Gemini 2.5 Flash Preview TTS` is completely free for "standard," but not "batch." It's safe to assume a business offering AI Transcription would use the paid tier. But if you really wanted this functionality, and didn't mind having your data trained-on and passed around... This is something you could DIY at home.

---

#### OpenAI

- [Privacy Policy](https://openai.com/policies/privacy-policy) - [Mirror](https://web.archive.org/web/20260000000000*/https://openai.com/policies/privacy-policy/)
- [Business Data](https://openai.com/business-data/) - [Mirror](https://web.archive.org/web/20260000000000*/https://openai.com/business-data/)

What is OpenAI? The AI research company behind GPT and Whisper. Whisper is their speech-to-text model — it's the actual transcription engine inside Assembly.ai, which in turn powers Fellow.ai, Fireflies, and Clari.

| | |
|---|---|
| Voice classified as biometric | 🔴❌ No |
| Sub-processors public | ✅ Yes |
| Trains AI on your data | ✅ No — API data not used for training by default (since March 2023) |
| Opt model | ✅ Opt-in only for API; opt-out available for consumer ChatGPT |
| Retention | ✅ 30 days (abuse monitoring logs); Zero Data Retention available for eligible customers |
| Data sold or shared | ✅ Not sold |
| Admin access to all employee biometrics | N/A — model provider |
| Actual Voice Processor | ✅ In-house (Whisper) |
| Age Minimum | ⚠️ 13 (consumer) |

This is the least bad entry in this category, and that's worth acknowledging. OpenAI made the call in March 2023 to stop training on API data by default — and held to it. If you're submitting audio via an API customer (Assembly.ai being the relevant one here), your data is not going into OpenAI's training pipeline. That's a cleaner posture than most of the services built on top of it. On paper, anyways.

The Zero Data Retention option is real, though it requires application and approval. For the average transcription service customer, this isn't something you're choosing — your vendor is choosing it, or not. Whether Assembly.ai has ZDR enabled for their Whisper calls is a question for Assembly.ai.

The 13-year-old minimum is for the consumer side — ChatGPT, etc. The API side doesn't have the same consumer-facing exposure. But it's worth noting that OpenAI's Whisper processes audio without any age verification mechanism on their end. The age of the voice in the recording is not their problem by policy.

What OpenAI doesn't do, notably, is classify voice as biometric data. For a company that has built one of the most capable voice models in the world, that omission is deliberate.

---

#### Anthropic

- [Privacy Policy](https://www.anthropic.com/privacy) - [Mirror](https://urlscan.io/result/019d7040-838d-76dc-a1e9-c7f13289d0dc/dom/)
- [Commercial Terms](https://www.anthropic.com/legal/commercial-terms) - [Mirror](https://urlscan.io/result/019d7040-b820-7285-a26d-429b6724e452/dom/)

What is Anthropic? AI safety company behind Claude. Their models appear as sub-processors in Avoma's sub-processor list, and in Deepgram's sub-processor list for "interactive text and audio."

| | |
|---|---|
| Voice classified as biometric | 🔴❌ No |
| Sub-processors public | ✅ Yes |
| Trains AI on your data | ✅ No — "Anthropic may not train models on Customer Content from Services" (Commercial Terms) |
| Opt model | ✅ Contractually prohibited (API); opt-out available (consumer Claude.ai) |
| Retention | ✅ 30 days post-deletion (consumer); DPA governs API |
| Data sold or shared | ✅ No — explicitly stated |
| Admin access to all employee biometrics | N/A — model provider |
| Actual Voice Processor | N/A |
| Age Minimum | ✅ 18 |

Anthropic is the cleanest at the API level — and the commercial terms back it up with actual contractual language, not just a policy statement. "Anthropic may not train models on Customer Content from Services" is the kind of sentence that creates legal exposure if violated. That's meaningfully different from a privacy policy claim. Customers also retain ownership of all inputs and outputs, with Anthropic explicitly assigning any rights it might claim in outputs back to the customer.

The consumer side (Claude.ai) has a training opt-out rather than a prohibition, which is a lesser protection — but that's the consumer product, not the API layer that appears in enterprise tooling.

Anthropic's age minimum of 18 is the highest in this list, and it applies to both consumer and API tiers.

What Anthropic doesn't do is classify voice or audio as biometric data — same omission as every other provider here. For a company with an explicit safety mandate, that gap is noticeable.

The presence of Anthropic and OpenAI in Deepgram's sub-processor list is worth sitting with. Both companies have reputations for taking safety and privacy seriously — and their API policies are generally better than the transcription services built on top of them. The problem is that policy quality at the foundation layer doesn't flow upward automatically. Deepgram's own indefinite retention and vague training language applies to data before and after it touches OpenAI or Anthropic. The best link in a chain doesn't redeem the weakest one.

---

### Key Takeaways

1. While I may not be covered under GDPR, the regulations require more documentation (e.g., sub-processors) which is monumental in understanding how these services operate.
   - I cannot state how thankful I am that some of these companies adhere to GDPR and therefore must be more transparent in their operations.
2. None of them openly state they are rolling their own internal Agentic AI.
3. Data is generally anonymized, unless it suits the business needs (e.g., ZoomInfo).
4. Principle of Least Privilege be damned; the majority of these services let the Account Administrator(s) have free rein over all employee biometric data.
5. Boilerplate: The more generic and vague a company is (e.g., "the Services", no hard retention timeline), the less I inherently trust the company.
6. Calling it what it is: Voice and Likeness/Face is considered Biometric Data. If you're handling Biometric data, you need to call this out in your policies. This is another form of PII.
7. Be cognizant of Age restrictions. A doctor using AI medical devices on children is very likely breaking policies, contracts, laws, and regulations.

---

### Threat Model

Your voice is out there. Your daughter's voice is out there. Depending on which service your employer and your doctor used, it's in a pipeline somewhere — transcribed, processed, handed off to sub-processors, stored. Retention timelines in these policies are best-case scenarios. Most are "indefinite" or "unclear," which in practice means forever.

**Voice is a permanent identifier.** You can change a password. You can get a new credit card. You cannot change your voice. When a model trains on your voice, it doesn't just store a recording — it learns to reproduce you. The output is new audio, generated on demand, that sounds exactly like you saying things you never said. A version of you that speaks independently of anything you do, available to whoever ends up with that dataset.

**The attacks are documented.** Voice cloning requires shorter and shorter samples every year. A few minutes of meeting audio — the kind every service on this list collects — is enough. The documented use cases: synthetic voice bypassing voice-authenticated 2FA, voice-cloned social engineering for Business Email Compromise. "Hey, I need you to wire $47,000 to this account" lands differently when it sounds exactly like the CFO. That audio exists in a pipeline somewhere. The question is who else reaches it.

**Medical audio is a separate and worse category.** HIPAA exists because health data carries consequences other PII doesn't — insurance, employment, custody, immigration status. The doctor who recorded my daughter didn't just collect a voice sample. He collected a symptom description, a minor's identity, and a treatment record, routed through a service whose privacy policy I still haven't been able to fully identify. A breach of that service is a medical record leak with real-world consequences for a child who had no say.

**Aggregation and inference.** When a model trains on your voice, speech-to-text is the floor. Prosody — rhythm, pace, hesitation patterns, vocal stress — travels with the audio. Models use these signals to infer emotional state, confidence, and stress. ZoomInfo explicitly names "behavioral profiling" and "inferred business decisions" in their policy; that's a model of how you think and when you're certain. Taken in isolation, it's uncomfortable. Cross-referenced against external data sources — public records, breach dumps, social media, other vendor datasets — and the inferences compound into something the subject never assembled themselves. An adversary holding your behavioral voice profile alongside two or three other data sources can build a picture of you that you'd struggle to recognize and can't dispute.

**Organizational exposure.** Your employer's transcription vendor's sub-processor list is a target list for anyone seeking access to your organization's communications. A single sub-processor breach surfaces conversations from every company that vendor serves. The services with the longest sub-processor lists — ZoomInfo, Clari — have the widest blast radius when something goes wrong. The question your security team should be asking isn't "is this vendor secure?" — it's "how many independent attack surfaces does their full Data Processing Agreement (DPA) chain create?"

My employer opted in. My doctor opted in on my daughter's behalf. Neither of them asked.

---

### Primary Argument: Workforce Amplification

I work with Security Orchestration, Automation, and Response (SOAR) platforms. I've made a SOAR platform from scratch. I script for fun.

My work and personal life revolves around cosplaying as a programmer. I make reliable scripts that speed up day-to-day, business-specific tasks. The department I helped create, for creating and managing a SOAR platform, used my marketing term on KPIs: Workforce Amplifier.

AI is the evolved form of Workforce Amplification. **Only if you do it right.** Otherwise it becomes inefficient, expensive, unpredictable, and slow software — this is slop.

### Identifying Slop

AI done well means having Agents perpetually learning (on anonymized data). The data input/processing/output is extremely consistent, and gradually gets better.

AI Slop, as defined by me, is when you're using an off-the-shelf LLM for a specific use-case. The data input/processing/output is NOT consistent, and stagnates. Easiest method of implementation boils down to three use-cases:
1. Summaries
2. Parsing
3. Scoring

Bonus slop-points if everything is time-of-flight, and nothing is retained locally for training/scaffolding.

To be fair: AI-assisted note-taking does offer genuine value — exact transcripts with timestamps, speaker identification, automatic summaries, action item extraction, and multilingual translation. When it works, it works. The problem isn't the output. It's the cost.

Almost all of these services are AI Slop. No custom AI stack. Nothing revolutionary. Rehash of existing LLM use-cases. At least with a service like Fellow.ai or Fireflies, I know they're taking on the risk and legal burden for partnering with Assembly.ai.

---

### On-Device / No-AI Alternatives

We've had on-device dictation for years — this predates the current AI frenzy by a decade. It doesn't require a SaaS subscription, a privacy policy negotiation, or your voice living on someone's server. What it doesn't give you is a meeting summary with action items — and that's the tradeoff management doesn't want to make.

- **[Whisper.cpp](https://github.com/ggerganov/whisper.cpp)** — OpenAI's Whisper model, runs locally, no data leaves your machine. Free. Needs comfort with a terminal.
- **[MacWhisper](https://goodsnooze.gumroad.com/l/macwhisper)** — GUI wrapper for Whisper.cpp. No terminal required. Free tier available. macOS only.
- **Apple Dictation (Enhanced mode)** — on-device since macOS Ventura. No server calls. Works anywhere you can type. iOS does the same system-wide.
- **Windows Speech Recognition** — built into Windows 10/11. On-device. Clunky, but yours.
- **Android Speech Recognition** — an on-device option exists, but newer Android versions increasingly route through Google Gemini. Check your settings before assuming it's local.
- **GoTranscript (Non-AI contract)** — if you need transcription and want a human doing it, GoTranscript's Non-AI contract is a real option today. A contract with a small independent company is only as durable as that company's independence — an acquisition or platform pivot can void terms overnight, and GoTranscript offers no guarantee either won't happen.

These tools restore what the SaaS pipeline removes. In security terms, all three pillars: **Confidentiality** — your audio never leaves your machine. **Integrity** — you own the transcript end-to-end; no vendor accesses, modifies, or deletes it. **Availability** — no subscription to lapse, no policy change to absorb, no vendor to be acquired and replatformed into something worse.

The tradeoff is real. You won't get a polished summary with action items automatically pushed to your CRM. But you'll know exactly where your data is. That used to be table stakes.

---

### Closing

My daughter's voice is in a model somewhere. Mine too. That model can now synthesize audio that sounds like us — saying things we never said, in conversations we never had. It follows from the policies I read, the sub-processor lists I downloaded, the DPAs I noted. The consent model for most of these services is: your employer agreed, so you agreed. The opt-out is your problem to find and execute. The sub-processors are whoever the vendor decided to use this month. None of that data fully goes away.

I filed an ethics complaint against the urgent care's C-suite. Documented the FDA clearance violation on the AI stethoscope, laid out the consent failures, put it in writing. They ceased using AI transcription services and the AI-powered stethoscope. One complaint. One outcome. The system isn't immovable — it just requires someone to push.

If you're in security, you're probably the person in your organization who reads vendor contracts when nobody else does. You're the one who knows what "sub-processor" means and why it matters, what a DPA actually says versus what the sales deck implies. The same way you'd flag a misconfigured S3 bucket or an unsigned update — this is a vulnerability. It lives in the contracts your company signs, in the tools your employer deploys, in the exam room your kid sits in. You have context now. Context creates obligation.

Read the docs. Then do something about it. You're our only hope.

Or don't do anything, [I'm not your manager.](https://youtu.be/EjNBzyLqDPM?t=10).
