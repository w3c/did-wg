## DID Core Formal Objection FAQ

This is a single place that collects Frequently Asked Questions and
links about the recent set of objections that Google, Apple, and 
Mozilla filed against the W3C Decentralized Identifier specification.
This document is maintained by Manu Sporny, one of the Editors of the 
DID Core 1.0 specification.

1. [What is going on?](#what-is-going-on)
1. [Why does the W3C hate decentralization?](#why-does-the-w3c-hate-decentralization)
1. [What happens if the objections are upheld?](#what-happens-if-the-objections-are-upheld)
1. [Why the concern over Google, Apple, and Mozilla objecting?](#why-the-concern-over-google-apple-and-mozilla-objecting)
1. [Did the DID Working Group follow its charter?](#did-the-did-working-group-follow-its-charter)
1. [Was practical interoperability achieved?](#was-practical-interoperability-achieved)
1. [Is the DID specification decentralized enough?](#is-the-did-specification-decentralized-enough)
1. [Does the DID specification cause great environmental harm?](#does-the-did-specification-cause-great-environmental-harm)
1. [Does the DID specification encourage ever growing divergence?](#does-the-did-specification-encourage-ever-growing-divergence)
1. [How long will this take?](#how-long-will-this-take)
1. [What could be done in the future to avoid this?](#what-could-be-done-in-the-future-to-avoid-this)

### What is going on?

The [W3C Decentralized Identifier (DID) Working Group](https://www.w3.org/2019/did-wg/)
had [consensus](https://www.w3.org/2019/did-wg/Meetings/Minutes/2021-07-20-did#resolution1) to
propose publication of [DID Core 1.0](https://www.w3.org/TR/did-core/) as a W3C Proposed Recommendation 
(basically, a global Web standard). There were 
[40 W3C Member companies](https://www.w3.org/2002/09/wbs/33280/did-core-pr/results) that 
agreed to publication of DID Core 1.0 as a W3C Recommendation and there were 
3 companies that objected: Google, Apple, and Mozilla. The W3C Team stepped 
in to [mediate a discussion](https://www.w3.org/2021/09/21-did10-minutes.html) 
that did not resolve the formal objections.

The acting W3C Director then decided to 
[request feedback from the W3C Council](https://www.w3.org/2019/did-wg/Meetings/Minutes/2021-10-05-did#section2), 
which is composed of the W3C Advisory Board and the W3C Technical
Architecture Group, and take the new W3C Council Formal Objection resolution
process for a spin. The Decentralized Identifier Working Group is deeply
frustrated by this recent turn of events, but understands that someone needs
to be the first through this new process. Ultimately, the decision to overturn
the objections or to uphold them will be up to the W3C Director, however, it is
expected that this particular run will set precedent for how this is handled
at W3C in the future.

There are four aspects of how this came about and how the Formal Objection Council will operate that are deeply concerning:

1. The objectors (Google, Apple, and Mozilla), and the proponents (over 40
companies) collectively hold 7 out of the 21 seats on the W3C Formal Objection Council. This
enables 1/3rd of the W3C Council who are formally objecting to the 
ratification of DID Core to engage in what is supposed to be an impartial and fair process.

2. The new W3C Council Formal Objection Process gently suggests that
individuals that might have a conflict of interest can voluntarily recuse
themselves; the decision is left up to the individual. Apple has raised a
formal objection and sits on both the W3C AB and W3C TAG; are both individuals
expected to recuse themselves? The hope is that the answer to this question is "Yes,
because the formal objection is on behalf of Apple and therefore, there is a
conflict of interest." The same recusal issue applies to Google's representatives.

3. The W3C Team, who have a long and positive track record of striking the
right balance when providing input into these sorts of decisions, will be
all but stripped of any voting authority (having only 1 seat out of 21 on the 
council) when the W3C Formal Objection Council process is finalized. While
the current decision is going to be with the Director, the future situation
largely eliminates substantive input from the W3C Team.

4. Lastly, Google, Apple, and Mozilla made no attempt to bring their formal
objections to the Decentralized Identifier Working Group since the Working
Group started, and then during the first transition to Candidate
Recommendation and then during the second transition to Candidate
Recommendation. The first time the group heard of these objections during its
two-year charter was in the days before the poll closed to approve DID Core
1.0 as a W3C Recommendation.

That is, in a nutshell, what is going on.

You can read more about what's going on here:

[Does the W3C Still Believe in Tim Berners-Lee’s Vision of Decentralization?](https://www.evernym.com/blog/w3c-vision-of-decentralization/)

### Why does the W3C hate decentralization?

The W3C does not hate decenrtalization. Much of social media reporting on 
this incident has confused what is and is not an official W3C position.

W3C is a membership organization that consists of over 450 companies. When
there is a new technology that has completed standardization in a Working
Group, the entire membership is urged to vote on the standard. One company,
one vote; a startup consisting of three people has the same voting power
as the biggest technology company. In this case, three of those companies 
objected (0.6%, a little over half of a percent are concerned about the
standard) and the [W3C Process](https://www.w3.org/Consortium/Process/), 
which operates on consensus, and requires that we process those objections.
This is a case of a very small minority disagreeing about the standard.
It is not the position of the majority of the membership.

In fact, there is work to establish a new 
[Vision for the W3C](https://github.com/WebStandardsFuture/Vision), 
firmly rooted in principles, where one of those principles is to
"Ensure the Web does not favor centralization." While it doesn't
go as far as saying "The Web must favor decentralization.", it 
is certainly not a position against decentralization. There are many 
individuals and companies at W3C that believe in decentralization 
and continue to push the Web to be more decentralized than it is today.

### What happens if the objections are upheld?

There will be no official Decentralized Identifier standard for the forseeable
future. If the objections are upheld, the specification will be sent back to 
the DID WG for "further work". The further work will be determined by 
negotiating with the objectors on what they want to see changed in the
specification or the approach.

### Did the DID Working Group follow its charter?

In short, yes it did exactly what was agreed to in the 
[W3C DID Working Group Charter](https://www.w3.org/2020/12/did-wg-charter.html).

The success criteria described in the DID WG charter states:

* The Working Group will seek evidence of independent interoperable uses
  of the DID syntax and data model from at least two independent
  implementations of each feature defined in the specification.

* The group will add a section detailing any known security or privacy
  implications for implementers, Web authors, and end users.

* The group will maintain and advance a test suite enabling
  interoperability testing, which will ensure the deterministic
  production and consumption of DIDs (URI syntax) and DID Documents
  (data model).

There are 112 DID Methods that have been registered as "Provisional" in
the [DID Method Registry](https://www.w3.org/TR/did-spec-registries/#did-methods). 
Of these, 47 DID Method implementations have
been submitted to the DID Core test suite with the 
[vast majority passing all features each method implemented](https://w3c.github.io/did-test-suite/#report-by-methods).

The interoperability goal of DID Core was at the data model and
serialization layer (NOT interoperability within the same DID Method);
that is, success was to be measured by how many DID Methods used the
same identifier syntax and data model to express features required by
the Decentralized Identifier Ecosystem. The DID Test Suite tested 137
normative features in the specification. Implementers ran their
implementation output against the test suite and the test suite recorded
whether or not their DID Method was conformant with each feature the DID
Method implemented. The end result was a demonstration that 47 DID
Methods conformed with the DID Core specification; that is, they used
the same data model and serialization.

Some of the preliminary DID WG Charter proposals included standardizing
DID Methods. However, several W3C Members objected to standardizing DID
Methods and thus standardizing DID Methods was negotiated to be out of
scope when the [DID Working Group Chartering discussions happened](https://www.w3.org/2020/12/did-wg-charter.html#out-of-scope). 
The DID WG was specifically prevented from ensuring multiple interoperable
implementations within a single DID Method. That said, it happened
anyway (outside of the WG) to some degree that is elaborated upon
in the question about 
[practical interoperability](#was-practical-interoperability-achieved).

### Was practical interoperability achieved?

Given that the goal of DID Core was to ensure that DID Methods used the
same identifier syntax and data model to express the same concepts, and
we had 47 implementations submitted for testing that did this, yes,
there is practical interoperability across DID Methods.

Going above and beyond what was required by our charter, some DID Method
implementers, such as for did:key and did:web, have demonstrated
interoperability between multiple independent implementations in forums
such as those the US DHS Silicon Valley Innovation Program has required
of 
[vendors implementing this technology in government programs](https://docs.google.com/presentation/d/1MeeP7vDXb9CpSBfjTybYbo8qJfrrbrXCSJa0DklNe2k/edit). 
The same is true for 
[Canadian government initiatives](https://www.ic.gc.ca/eic/site/101.nsf/eng/00068.html) 
as well as [European Union initiatives](https://essif-lab-infrastructure-oriented.fundingbox.com/).

The DID WG seems to be willing to add the topic of standardizing some DID
Methods under a future charter.

To explain this from a differnt angle, it helps to understand how DIDs are
used within 
[Verifiable Credentials](https://www.w3.org/TR/vc-data-model/#introduction), 
which was ratified as a W3C global standard two years ago.

In order to verify a Verifiable Credential that was digitally signed using a
public key associated with a Decentralized Identifier, you have to use a
couple of things.

1. DID Syntax
2. DID Resolver
3. DID Document

First, you need to know what a DID looks like -- that's DID Syntax. You then
need to feed that DID into something to get a DID Document back -- that's the
DID Resolver. Then you need to be able to interpret what you got back in order
to find the public key you're looking for -- that's the DID Document.

To see if you have interoperability at a high level (also known as an
integration test), you can take a Verifiable Credential and give it to two
different Verifier implementations. If both implementations verify
successfully, and use different code bases, you can be fairly certain that
interoperability exists in the ecosystem. Why is this?

If you look at this from the perspective of a Verifier, the only thing it
cares about is that it has a DID, it feeds it to a DID Resolver, and it gets
back a DID Document. It doesn't necessarily care how the DID Resolver gets the
DID Document (which is defined by the DID Method), just that the DID Document
that it does get is going to be the same as other Verifiers when they run the
same process. In other words, how the DID Method works or how resolution
happens doesn't really matter, as long as you can see that multiple code bases
get the same DID Document back when Resolving and come to the same conclusion
when verifying a Verifiable Credential.

In the first iteration of the DID Working Group, we standardized DID Syntax,
the DID Resolver interface, and the DID Document. We didn't standardize DID
Methods because 1) we were asked to aggressively narrow scope by the W3C
Advisory Committee, 2) we didn't feel that the entire community could agree on
standardizing any singular DID Method when we chartered the group and the W3C
Advisory committee had concerns over "picking a winning DID Method", 3) we
don't need to do that to demonstrate interoperability for a data model
specification, and 4) we can (and did) test for interoperability without 
standardizing DID Methods (as described above).

You can see this in action today (huge shout out to Charles Lehner and Spruce
for putting this tool together) by going to:

https://demo.didkit.dev/2021/08/multiverifier/

Copy-pasting the contents of this page into the tool above:

https://raw.githubusercontent.com/w3c-ccg/vc-http-api-test-suite/main/packages/vc-http-api-test-server/__fixtures__/verifiableCredentials/case-1.json

... and clicking "Verify". You'll see that some of the endpoints fail, but at
least five of the vendors pass. This is "practical interoperability" for at
least did:key because many of the passing systems don't use the same DID
Resolver implementation, but successfully resolve the did:key:z6Mki...vJ3
value into the appropriate DID Document and use the public key contained
within to verify the digital signature.

Do we want to do more than just that? Of course we do! We want to fully
specify how some of these DID Methods work, generate thorough test suites for
them, and take those specifications through the W3C standardization process.
Do we need to do that to demonstrate practical interoperability? Nope, 
because we have achieved demonstrating practical interoperability through
end-to-end integration testing.

### Is the DID specification decentralized enough?

Yes, there are [112 DID Methods](https://www.w3.org/TR/did-spec-registries/#did-methods) 
where the majority of them are based
on more "decentralized" technologies, such as distributed ledgers
(did:ion, did:sov, did:v1) or storage-less distributed systems
(did:key), than others that are based on centralized systems (did:ccp,
did:kr).

The fact that we cannot stop individuals from choosing the systems on
which their DID Methods are based should be an indicator that we have
achieved to make things decentralized. That said, it became evident
early on that not everyone agrees on every type of "decentralization"
(governance, computational, political, regional, etc.) that is important
for a DID Method. For this reason, the DID WG has spent a considerable
amount of time creating a [DID Rubric](https://www.w3.org/TR/did-rubric/) 
that enables organizations to
evaluate whether or not a DID Method meets the decentralization criteria
that's important to them. The Rubric currently contains 36 criteria to
be considered, a number of them on different axes of "decentralized".

What the group has discovered over the past several years of
pre-standards and standards work is that "decentralization" is not a
binary condition, but a multi-dimensional one where different parties
weigh each dimension differently and there is no single correct answer
wrt. Centralized vs. Decentralized. The DID WG did, as much as it could
practically do, without imposing draconian rules that at best, wouldn't
be followed, or at worst, could be viewed as censoring the ability of an
individual or organization from choosing a solution based on their needs.

The DID WG believes that it has achieved the decentralization goals that
it intended to achieve and has documented the areas of debate such that
others can benefit from the many dimensions of the decentralization vs.
centralization debate.

### Does the DID specification cause great environmental harm?

The DID specification is a data model specification and thus does 
not recommend any specific backing technology or network for a 
decentralized identifier. There is a good article on this particular 
point here:

[https://www.coincenter.org/open-blockchains-and-decentralized-identity-standards/](https://www.coincenter.org/open-blockchains-and-decentralized-identity-standards/)

Some distributed ledgers consume greater computational resources than
others. Whether that consumption is warranted or wasteful is an ongoing
conversation far beyond the scope of the DID WG. Within the WG, resource
usage has been a regular topic of debate, and like the "centralized vs.
decentralized" discussion, the answer largely depends on the
requirements of the individual or organization using the DID Method.
There is implementation guidance that is 
[currently being written](https://github.com/w3c/did-imp-guide/pull/27) that
urges implementers to carefully consider the potential environmental
impacts of their DID Methods, as well as additional criteria for the 
[DID Rubric](https://www.w3.org/TR/did-rubric/) to help people decide 
which DID Methods best meet their needs.

The DID WG is actively 
[addressing this concern in the DID Implementation Guide](https://github.com/w3c/did-imp-guide/pull/27) and the 
[DID Rubric](https://www.w3.org/TR/did-rubric/), intends to continue this
discussion in future WGs, and welcomes others to contribute to the 
authoring of this sort of material.

### Does the DID specification encourage ever growing divergence?

One property of decentralized systems is not being able to control the
number of individuals and organizations that implement the system. The
DID Spec Registries provide one mechanism for DID Methods to register,
but there is no requirement for them to use it. The nature of a
decentralized system is not compatible with a required central authority
determining who may do what.

To put the number of DID Methods in perspective, however, we point out
that there are currently 346 URI Schemes registered in the IANA URI
Scheme Registry, yet many don't seem to be concerned with an ever
growing number of URI Schemes. One of the reasons for this is an inverse
power law that comes into play in most markets, where a market over
time, will tend to consolidate on a handful of implementation choices.
Many modern systems have largely settled on https and webrtc and left
gopher and ftp behind; but the consolidation took many years to play
out. In the same way, we expect this to happen with DID Methods. 

This is
already happening to a degree, with many implementers supporting things
like did:key and did:web over some of the more esoteric DID Methods. The
start of successful technology cycles often start with an explosion of
options followed by market consolidation due to the difficulty of
supporting every option. This is something that any W3C WG has very
little control over when introducing new technologies.

The DID WG would most likely be open to strategies that would provide
healthy nudges to the market to consolidate sooner rather than later,
understanding that we have few tools to enforce that in a decentralized
ecosystem.

### Why the concern over Google, Apple, and Mozilla objecting?

The concern is that Google, Apple, and Mozilla are objecting and then 
get to be on the W3C Council that determines whether or not the objection
is valid. That is, these three companies have a non-trivial influence
on overriding what 40 companies have found consensus to standardize 
at W3C. There are concerns around some of the biggest tech companies
on the planet being able to stop global standards that would open 
their businesses up to more competition.

Google and Apple are two of the largest identity providers on the planet.
Google Accounts, Apple ID, Sign in with Google, and Sign in with Apple are a
few of the products and services that could be viewed as competing with the
W3C Decentralized Identifiers specification.

Speaking more broadly, Google Wallet, Apple Wallet, and initiatives such as
Apple's integration of Mobile Driver's Licenses into an ecosystem that does
not allow open competition is also problematic:

[https://www.apple.com/newsroom/2021/09/apple-announces-first-states-to-adopt-drivers-licenses-and-state-ids-in-wallet/](https://www.apple.com/newsroom/2021/09/apple-announces-first-states-to-adopt-drivers-licenses-and-state-ids-in-wallet/)

There is a belief that some of these systems are not in the best interest of the
general public. Here is a statement from the Technical Director of the DHS 
Silicon Valley Innovation Program commenting on why the approach taken with 
some of these closed Digital Wallet ecosystems is problematic:

[https://lists.w3.org/Archives/Public/public-credentials/2021Oct/0005.html](https://lists.w3.org/Archives/Public/public-credentials/2021Oct/0005.html)

The W3C Decentralized Identifier WG, W3C Verifiable Credentials WG, and the
Credentials Community Group are working on open wallet ecosystems. Yet another
class of products and services that could be viewed as competitive.

There is concern over the individuals that work for these corporations
being biased in some way by the competing
technologies and services that their companies are producing. While 
these individuals are believed to be unbiased by some and are not 
expected to just tow tow the company line... it's not appropriate for them 
to be a part of the decision making process for their company's formal 
objections because it raises doubt over the fairness of the W3C Council 
Formal Objection process. That's the more damaging thing to W3C as a community; 
accidentally fomenting distrust in the process. We're already starting to see the
first well-written opinion pieces hit the media outlets on this concern:

[https://www.coindesk.com/business/2021/10/01/is-mozilla-trying-to-sabotage-distributed-identity/](https://www.coindesk.com/business/2021/10/01/is-mozilla-trying-to-sabotage-distributed-identity/)

[https://www.coincenter.org/open-blockchains-and-decentralized-identity-standards/](https://www.coindesk.com/business/2021/10/01/is-mozilla-trying-to-sabotage-distributed-identity/)

It was quite difficult to get many of these "decentralized technology"
companies to W3C and convince them that the browser vendors didn't run the
show at W3C. It took years of concerted effort, and it's exactly this sort of
situation that reassures their fears. Members of the DID Working Group
have received a substantive number of texts and emails since Apple, Google, 
and Mozilla's formal objections, primarily due to the way they were raised 
and how they're being processed.

### How long will this take?

There is no time limit set on when objections are upheld or rejected. It 
is typically  done within a month or two of the formal objections being 
raised, but can drag on for months after that.

### What could be done in the future to avoid this?

Probably not much; formal objections at the last minute can and do 
happen. It's been this way for decades and is unlikely to change.
This particular occurence is especially disruptive because of an
experiment that is being run to determine if the new formal 
objection process is acceptable to the membership. There are courses 
of action that the W3C Membership can take to resolve 
these concerns (but again, all of these are currently being debated):

1. Make communicating with the W3C Council regarding the formal objection
strictly off-limits outside of the formal objection process (public
communication is allowed, but "backroom" communication is disallowed). Violating
this hard line should result in removal from the W3C TAG or W3C AB because it
is an egregious violation of trust in our elected representatives.

2. Make recusal from the W3C Council decision mandatory for any individual
that is associated on either side of the formal objection.

3. Ensure that the W3C Staff are a substantive part of the formal objection
process, and not relegated to the sidelines as they seem to be in the new W3C
Council-based process. They are a check and balance that we should be
depending on as a community.

4. Strike down formal objections that made no attempt to engage with the
Working Group. Allowing formal objections in the 11th hour accomplishes
nothing other than stress, distrust, and drama -- three things we don't need
more of at W3C. The W3C Process should be predictable, trustworthy, and boring.
