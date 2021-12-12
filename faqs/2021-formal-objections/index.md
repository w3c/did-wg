---
layout: default
---
## DID Formal Objection FAQ

This document is an informative document that has been reviewed,
published, and is maintained by the
[W3C Decentralized Identifier Working Group](https://www.w3.org/2019/did-wg/).
The document IS NOT a reflection of the views of the objectors
(Apple, Google, and Mozilla) to the publication of the DID Core specification.
Comments regarding this FAQ are welcome and should be sent to the
[W3C Advisory Committee Forum](mailto:w3c-ac-forum@w3.org), a
Member-only W3C mailing list. Any member of the public is also welcome to
join the discussion in the
[W3C Credentials Community Group](https://www.w3.org/community/credentials/),
where updates on the status of the DID Core Formal Objections
are provided on a regular basis.

1. [What is going on?](#what-is-going-on)
2. [What are the points of contention?](#what-are-the-points-of-contention)
3. [Why does the W3C hate decentralization?](#why-does-the-w3c-hate-decentralization)
4. [What happens if the objections are upheld?](#what-happens-if-the-objections-are-upheld)
5. [Why the concern over Google, Apple, and Mozilla objecting?](#why-the-concern-over-google-and-apple-objecting)
6. [Did the DID Working Group follow its charter?](#did-the-did-working-group-follow-its-charter)
7. [Did the DID Core specification get wide review?](#did-the-did-core-specification-get-wide-review)
8. [Was practical interoperability achieved?](#was-practical-interoperability-achieved)
9. [Is the DID specification decentralized enough?](#is-the-did-specification-decentralized-enough)
10. [Does the DID specification cause great environmental harm?](#does-the-did-specification-cause-great-environmental-harm)
11. [Does the DID specification encourage ever growing divergence?](#does-the-did-specification-encourage-ever-growing-divergence)
12. [How long will this take?](#how-long-will-this-take)
13. [What could be done in the future to avoid this?](#what-could-be-done-in-the-future-to-avoid-this)
14. [Who else has written about this?](#who-else-has-written-about-this)

### What is going on?

The [W3C Decentralized Identifier (DID) Working Group](https://www.w3.org/2019/did-wg/)
achieved [consensus](https://www.w3.org/2019/did-wg/Meetings/Minutes/2021-07-20-did#resolution1) to
publish [DID Core 1.0](https://www.w3.org/TR/did-core/) as a W3C Recommendation
(basically, a global Web standard). There were
[40 W3C Member companies](https://www.w3.org/2002/09/wbs/33280/did-core-pr/results) that
agreed to publication of DID Core 1.0 as a W3C Recommendation and there were
3 companies that objected: Google, Apple, and Mozilla. The W3C Team stepped
in to [mediate a discussion](https://www.w3.org/2021/09/21-did10-minutes.html)
that did not resolve the formal objections.

The acting W3C Director then decided to request feedback using an
[experimental group called the W3C Formal Objection Council](https://www.w3.org/2019/did-wg/Meetings/Minutes/2021-10-05-did#section2),
which is to be composed of the W3C CEO, the W3C Advisory Board, and the W3C
Technical Architecture Group. This will be the first time the new W3C
Formal Objection Council resolution process is going to be used for this sort of
objection. The Decentralized Identifier Working Group is deeply frustrated by
this recent turn of events, but understands that someone needs to be the first
through this new process. Ultimately, the decision to overturn the objections or
to uphold them will be up to the W3C Director, however, it is expected that this
particular run will set precedent for how this is handled at W3C in the future.

It has been over three months since the formal objection was raised, with an
expectation that the W3C Formal Objection Council will hear arguments for and
against the ratification of DID Core in early 2022. The W3C Advisory Board has
struggled to finalize the rules of operation for the W3C Formal Objection
Council over the past several months.

That is, in a nutshell, what is going on.

### What are the points of contention?

#### Standardizing "Truly" Decentralized Methods

There seems to be general agreement among the objectors and DID Working Group
that a good future state would be to have a handful of "truly decentralized
methods" that are standardized and broadly adopted. The challenge is that there
is no concrete proposal among the objectors or the DID Working Group that would
achieve standardizing a set of "ideal" DID Methods in the near term, because
there is no agreement on what "truly decentralized" means. This challenge was
one of the reasons why standardizing DID Methods was explicitly out of scope for
the first iteration of the DID Working Group. At least one of the objectors
believes that to have been a mistake, but will have to concretely articulate how
whatever alternate path they propose will lead to a better or more guaranteed
outcome.

The definition of "truly decentralized methods" was a topic of discussion for
much of the DID Working Group's lifetime, and the discussion produced the DID
Rubric which lists over 36 different types of decentralization that one might
consider when selecting a DID Method. The WG asks that the objectors be concrete
in defining which types of decentralization matter to them in a way that will
result in consensus for the DID Working Group re-chartering process.

#### Usefulness of DID Core, by Itself, as a global standard

At least one of the objectors believes that the DID Core specification by itself
is not useful enough to publish as a global standard because it does not
standardize at least a few "truly decentralized methods". The DID Working Group
believes that DID Core by itself is useful as a global standard today because it
enables software libraries to be written that conform to the DID Document data
model (rotatable/revokable public key expression and service descriptions) as
well as the interface for resolving a DID Document using a DID Document
Resolver. This is the sort of interoperability that the DID Working Group
targeted and what the test suite demonstrates today. Standardizing the
interfaces that the DID Document provides is useful in and of itself. Further
standardization of "truly decentralized methods" will also be useful for
instructing implementers on how to interact with the ecosystem, but that must be
done with great care to ensure that we do not prevent other decentralized
methods. It's not that we don't have options; it's that consensus around those
options remains elusive for a variety of political and technical reasons as
demonstrated by the formal objections.

The DID Working Group asks that at least one of the objectors be concrete about
why they don't believe it is useful to publish DID Core as a global standard.
The DID Working Group understands that at least one objector wants us to show
"more" interop, but concretely articulating that more interop is possible at
this time is challenging because 1) the objections contain conflicting
requirements, and 2) there is no consensus around what "truly decentralized"
means; those that utter the phrase appear to mean it to be an objective measure,
but upon analysis, it tends to turn into a subjective one. Nevertheless, the
objectors will need to make the case why the DID Working Group and implementers
are misguided in their request for publication as a global standard and why DID
Core, by itself, is not useful enough for it to become a global standard.

#### Practical Usefulness of did:key and did:web

At least one of the objectors does not believe that did:key and did:web
demonstrate the sort of utility that is practically useful. The DID Working
Group believes that did:key and did:web are useful. A number of implementers
make use of did:key for ephemeral DIDs in production settings, while did:web
offers large institutions an on-ramp into the DID ecosystem without having to
commit to a "truly decentralized" DID method.

The DID Working Group was planning to standardize did:key and did:web for
practical reasons (people do use these DID Methods, which do exercise most
features of DID Core), but the Formal Objections have made us question whether
we could put those DID Methods into a charter that wouldn't receive further
Formal Objections because they're "not decentralized enough". The DID Working
Group asks that objectors propose concrete alternatives to did:key and did:web
that will achieve consensus during the rechartering process of the DID Working
Group.

#### Centralized DID Methods

Many of us (objectors and DID Working Group members) do not want to support the
registration of "centralized" (by some definition) DID Methods. However, I
expect that we all understand that we can't stop centralized DID Methods from
existing, just as we cannot all agree on which factor(s) outlined in the rubric
define "truly decentralized" methods, and it's better to document the reality of
the entire ecosystem than pretend that part of it doesn't exist. We could refuse
to register centralized DID Methods, but then we must make the whole "is it
decentralized enough" value judgement when people try to register their DID
Methods, which often does not come down to an objective measure.

If any of the objectors would like to pursue this, the DID Working Group would
need to understand what concrete set of objective requirements we could apply to
all DID Methods to draw a clear line between "centralized" and "decentralized".
Given the hours of discussion this topic has received in the DID Working Group,
I expect it will be difficult for the objectors to put forward concrete
objective criteria that the group has not already considered.

#### Sustainability and Conflict Within Ethical Web Principles ("EWP")

As a general rule, the objectors and the DID Working Group care about
sustainability and the
[W3C Ethical Web Principles](https://www.w3.org/2001/tag/doc/ethical-web-principles/)
(EWP). The DID Working Group would like concrete guidance from the W3C TAG, such
as updated sections in the
[Web Platform Design Principles](https://www.w3.org/TR/design-principles/)
that are more thoughtful about balancing conflicting EWP requirements, such as
may arise between sustainability and innovations in
[public key infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure)
to support digital human rights. Part of this discussion mirrors the
"decentralized enough" issues highlighted above. What is "compliant enough" from
an EWP sustainability or EWP freedom of expression perspective? When a solution
exposes conflict between various principles, then what is the priority of each
principle? What is the burden of proof to demonstrate the magnitude of the
effects of any concerns? These questions are larger than the DID Working Group.

Our hope is that the objectors' concrete guidance here is going to be the same
as ours — create guidance that firmly addresses how EWP are to be measured
across all W3C specifications and then apply that evenly to all W3C
specifications. This is too important to be done piecemeal in a single W3C WG
that is not holistically focused on the EWP or the Web Platform Design
Principles.

### Why does the W3C hate decentralization?

The W3C does not hate decentralization. Much of social media reporting on this
incident has confused what is and is not an official W3C position.

W3C is a membership organization that consists of over 450 companies. When there
is a new technology that has completed standardization in a Working Group, the
entire membership is urged to vote on the standard. One company, one vote; a
startup consisting of three people has the same voting power as the biggest
technology company. In this case, three of those companies objected (0.6%, a
little over half of a percent are concerned about the standard) and the
[W3C Process](https://www.w3.org/Consortium/Process/),
which operates on consensus, and requires that we process those objections. This
is a case of a very small minority disagreeing about the standard. It is not the
position of the majority of the membership.

In fact, there is work to establish a new
[Vision for the W3C](https://github.com/WebStandardsFuture/Vision),
firmly rooted in principles, where one of those principles is to "Ensure the Web
does not favor centralization." While it doesn't go as far as saying "The Web
must favor decentralization.", it is certainly not a position against
decentralization. There are many individuals and companies at W3C that believe
in decentralization and continue to push the Web to be more decentralized than
it is today.

### What happens if the objections are upheld?

There will be no official Decentralized Identifier standard for the foreseeable
future. If the objections are upheld, the specification will be sent back to
the DID Working Group for "further work". The further work will be determined by
negotiating with the objectors on what they want to see changed in the
specification or the approach.

### Did the DID Working Group follow its charter?

In short, yes it did exactly what was agreed to in the
[W3C DID Working Group Charter](https://www.w3.org/2020/12/did-wg-charter.html).

The success criteria described in the DID Working Group charter states:

* The Working Group will seek evidence of independent interoperable uses
  of the DID syntax and data model from at least two independent
  implementations of each feature defined in the specification.

* The group will add a section detailing any known security or privacy
  implications for implementers, Web authors, and end users.

* The group will maintain and advance a test suite enabling
  interoperability testing, which will ensure the deterministic
  production and consumption of DIDs (URI syntax) and DID Documents
  (data model).

There are 112 DID Methods that have been registered in
the [DID Method Registry](https://www.w3.org/TR/did-spec-registries/#did-methods).
Of these, 47 DID Method implementations have been submitted to the DID Core test
suite with the
[vast majority passing all features each method implemented](https://w3c.github.io/did-test-suite/#report-by-methods).

The interoperability goal of DID Core was at the data model and serialization
layer (NOT interoperability within the same DID Method); that is, success was to
be measured by how many DID Methods used the same identifier syntax and data
model to express features required by the Decentralized Identifier Ecosystem.
The DID Test Suite tested 137 normative features in the specification.
Implementers ran their implementation output against the test suite and the test
suite recorded whether or not their DID Method was conformant with each feature
the DID Method implemented. The end result was a demonstration that 47 DID
Methods conformed with the DID Core specification; that is, they used the same
data model and serialization.

Some of the preliminary DID Working Group Charter proposals included
standardizing DID Methods. However, several W3C Members objected to
standardizing DID Methods and thus standardizing DID Methods was negotiated to
be out of scope when the
[DID Working Group Chartering discussions happened](https://www.w3.org/2020/12/did-wg-charter.html#out-of-scope).
The DID Working Group was specifically prevented from ensuring multiple
interoperable implementations within a single DID Method. That said, it happened
anyway (outside of the WG) to some degree that is elaborated upon in the
question about
[practical interoperability](#was-practical-interoperability-achieved).

### Did the DID Core specification get wide review?

Yes, more than many W3C specifications that have been published as global
standards. Here are the communities outside of the DID Working Group that
reviewed the DID specification, many of which sent representatives to
participate in the work over the years before and during the Working Group's
lifetime:

* W3C Technical Architecture Working Group ([review](https://github.com/w3ctag/design-reviews/issues/556#issuecomment-763900128))
* W3C Security and Privacy Interest Group ([review](https://lists.w3.org/Archives/Public/public-privacy/2021JanMar/0021.html))
* W3C Accessibility Working Group ([review](https://github.com/w3c/did-core/issues/105#issuecomment-655616261))
* W3C Internationalization Working Group ([review](https://github.com/w3c/did-core/issues/104#issuecomment-649187234))
* W3C Credentials Community Group (CCG) (sent participants who became a core part of the DID Working Group)
* Decentralized Identity Foundation (DIF) (sent participants who became a core part of the DID Working Group)
* Hyperledger Indy and Aries (sent participants who became a core part of the DID Working Group)
* Rebooting the Web of Trust Community (sent participants who became a core part of the DID Working Group)
* 42 DID Method implementers provided implementations to the test suite (most from outside of the DID Working Group)

### Was practical interoperability achieved?

Given that the goal of DID Core was to ensure that DID Methods used the same
identifier syntax and data model to express the same concepts, and we had 47
implementations submitted for testing that did this, yes, there is practical
interoperability across DID Methods.

Going above and beyond what was required by our charter, some DID Method
implementers, such as for did:key and did:web, have demonstrated
interoperability between multiple independent implementations in forums such as
those the US DHS Silicon Valley Innovation Program has required of
[vendors implementing this technology in government programs](https://docs.google.com/presentation/d/1MeeP7vDXb9CpSBfjTybYbo8qJfrrbrXCSJa0DklNe2k/edit).
The same is true for
[Canadian government initiatives](https://www.ic.gc.ca/eic/site/101.nsf/eng/00068.html)
as well as [European Union initiatives](https://essif-lab-infrastructure-oriented.fundingbox.com/).

The DID Working Group seems to be willing to add the topic of standardizing some
DID Methods under a future charter.

To explain this from a different angle, it helps to understand how DIDs are used
within
[Verifiable Credentials](https://www.w3.org/TR/vc-data-model/#introduction),
which was ratified as a W3C global standard two years ago.

In order to verify a Verifiable Credential that was digitally signed using a
public key associated with a Decentralized Identifier, you have to use a couple
of things: 1) the DID Syntax, 2) a DID Resolver, and 3) a DID Document.

First, you need to know what a DID looks like -- that's DID Syntax. You then
need to feed that DID into something to get a DID Document back -- that's the
DID Resolver. Then you need to be able to interpret what you got back in order
to find the public key you're looking for -- that's the DID Document.

To see if you have interoperability at a high level (also known as an
integration test), you can take a Verifiable Credential and give it to two
different Verifier implementations. If both implementations verify the digital
signatures successfully, and use different code bases, you can be fairly certain
that practical interoperability exists in the ecosystem. Why is this?

If you look at this from the perspective of a Verifier, the only thing it cares
about is that it has a DID, it feeds it to a DID Resolver, and it gets back a
DID Document. It doesn't necessarily care how the DID Resolver gets the DID
Document (which is defined by the DID Method), just that the DID Document that
it does get is going to be the same as other Verifiers when they run the same
process. In other words, how the DID Method works or how resolution happens
doesn't really matter, as long as you can see that multiple code bases get the
same DID Document back when Resolving and come to the same conclusion when
verifying a Verifiable Credential.

In the first iteration of the DID Working Group, we standardized DID Syntax, the
DID Resolver interface, and the DID Document. We didn't standardize DID Methods
because 1) we were asked to aggressively narrow scope by the W3C Advisory
Committee, 2) we didn't feel that the entire community could agree on
standardizing any singular DID Method when we chartered the group and the W3C
Advisory committee had concerns over "picking a winning DID Method", 3) we don't
need to do that to demonstrate interoperability for a data model specification,
and 4) we can (and did) test for interoperability without standardizing DID
Methods (as described above).

You can see this in action today (huge shout out to Charles Lehner and Spruce
for putting this tool together) by going to:

[https://demo.didkit.dev/2021/08/multiverifier/](https://demo.didkit.dev/2021/08/multiverifier/)

Copy-pasting the contents of these pages, which utilize the did:key and did:web
Methods respectively, into the tool above:

[https://raw.githubusercontent.com/w3c-ccg/vc-api-test-suite/main/packages/vc-http-api-test-server/__fixtures__/verifiableCredentials/case-1.json](https://raw.githubusercontent.com/w3c-ccg/vc-api-test-suite/main/packages/vc-http-api-test-server/__fixtures__/verifiableCredentials/case-1.json)

[https://raw.githubusercontent.com/w3c-ccg/vc-api-test-suite/61d498cd04c45a22b9578774e6a066b59a8f4e94/packages/vc-http-api-test-server/__fixtures__/verifiableCredentials/case-5.json](https://raw.githubusercontent.com/w3c-ccg/vc-api-test-suite/61d498cd04c45a22b9578774e6a066b59a8f4e94/packages/vc-http-api-test-server/__fixtures__/verifiableCredentials/case-5.json)

... and clicking "Verify". You'll see that some of the endpoints fail, but at
least five of the vendors pass. This is "practical interoperability" for at
least did:key and did:web because many of the passing systems don't use the
same DID Resolver implementation, but successfully resolve the
did:key:z6Mki...vJ3 and did:web:vc.transmute.world values into the appropriate
DID Documents and use the public key contained within to verify the digital
signature.

Do we want to do more than just that? Of course we do! We want to fully specify
how some of these DID Methods work, generate thorough test suites for them, and
take those specifications through the W3C standardization process. Do we need to
do that to demonstrate practical interoperability? Nope, because we have
already achieved demonstrating practical interoperability through end-to-end
integration testing.

### Is the DID specification decentralized enough?

Yes, there are
[112 DID Methods](https://www.w3.org/TR/did-spec-registries/#did-methods)
where the majority of them are based on more "decentralized" technologies, such
as distributed ledgers (did:ion, did:sov, did:v1) or storage-less distributed
systems (did:key), than others that are based on centralized systems (did:ccp,
did:kr).

The fact that we cannot stop individuals from choosing the systems on which
their DID Methods are based should be an indicator that we have achieved to make
things decentralized. That said, it became evident early on that not everyone
agrees on every type of "decentralization" (governance, computational,
political, regional, etc.) that is important for a DID Method. For this reason,
the DID Working Group has spent a considerable amount of time creating a
[DID Rubric](https://www.w3.org/TR/did-rubric/)
that enables organizations to evaluate whether or not a DID Method meets the
decentralization criteria that's important to them. The Rubric currently
contains 36 criteria to be considered, a number of them on different axes of
"decentralized".

What the group has discovered over the past several years of pre-standards and
standards work is that "decentralization" is not a binary condition, but a
multi-dimensional one where different parties weigh each dimension differently.
There is no single correct answer with respect to the question of Centralized
vs. Decentralized. The DID Working Group did, as much as it could practically
do, without imposing draconian rules that at best, wouldn't be followed, or at
worst, could be viewed as censoring the ability of an individual or organization
from choosing a solution based on their needs.

The DID Working Group believes that it has achieved the decentralization goals
that it intended to achieve and has documented the areas of debate such that
others can benefit from the many dimensions of the decentralization vs.
centralization debate.

### Does the DID specification cause great environmental harm?

The DID specification is a data model specification and thus does not recommend
any specific backing technology or network for a decentralized identifier.
There is a good article on this particular point here:

[https://www.coincenter.org/open-blockchains-and-decentralized-identity-standards/](https://www.coincenter.org/open-blockchains-and-decentralized-identity-standards/)

Some distributed ledgers consume greater computational resources than others.
Whether that consumption is warranted or wasteful is an ongoing conversation far
beyond the scope of the DID Working Group. Within the Working Group, resource
usage has been a regular topic of debate, and like the "centralized vs.
decentralized" discussion, the answer largely depends on the requirements of the
individual or organization using the DID Method. There is implementation
guidance that is
[currently being written](https://github.com/w3c/did-imp-guide/pull/27)
that urges implementers to carefully consider the potential environmental
impacts of their DID Methods, as well as additional criteria for the
[DID Rubric](https://www.w3.org/TR/did-rubric/) to help people decide
which DID Methods best meet their needs.

The DID Working Group is actively
[addressing this concern in the DID Implementation Guide](https://github.com/w3c/did-imp-guide/pull/27) and the
[DID Rubric](https://www.w3.org/TR/did-rubric/), intends to continue this
discussion in future WGs, and welcomes others to contribute to the
authoring of this sort of material.

### Does the DID specification encourage ever growing divergence?

One property of decentralized systems is not being able to control the number of
individuals and organizations that implement the system. The DID Spec Registries
provide one mechanism for DID Methods to register, but there is no requirement
for them to use it. The nature of a decentralized system is not compatible with
a required central authority determining who may do what.

To put the number of DID Methods in perspective, however, we point out that
there are currently 346 URI Schemes registered in the IANA URI Scheme Registry,
yet many don't seem to be concerned with an ever growing number of URI Schemes.
One of the reasons for this is an inverse power law that comes into play in most
markets, where a market over time, will tend to consolidate on a handful of
implementation choices. Many modern systems have largely settled on https and
webrtc and left gopher and ftp behind; but the consolidation took many years to
play out. In the same way, we expect this to happen with DID Methods.

This is already happening to a degree, with many implementers supporting things
like did:key and did:web over some of the more esoteric DID Methods. The start
of successful technology cycles often start with an explosion of options
followed by market consolidation due to the difficulty of supporting every
option. This is something that any W3C Working Group has very little control
over when introducing new technologies.

The DID Working Group would most likely be open to strategies that would provide
healthy nudges to the market to consolidate sooner rather than later,
understanding that we have few tools to enforce that in a decentralized
ecosystem.

### Why the concern over Google and Apple objecting?

Google and Apple are two of the largest identity providers on the planet. Google
Accounts, Apple ID, Sign in with Google, and Sign in with Apple are a few of the
products and services that could be viewed as competing with the W3C
Decentralized Identifiers specification. Similarly, the DID Working Group is
composed of companies that might compete with Google and Apple's identity
services.

Speaking more broadly, Google Wallet, Apple Wallet, and initiatives such as
Apple's integration of Mobile Driver's Licenses into an ecosystem that does not
allow open competition is also problematic:

[https://www.cnbc.com/2021/11/14/apple-sticking-taxpayers-with-part-of-the-bill-for-digital-id-rollout.html](https://www.cnbc.com/2021/11/14/apple-sticking-taxpayers-with-part-of-the-bill-for-digital-id-rollout.html)

There is a belief that some of these systems are not in the best interest of the
general public. Here is a statement from the Technical Director of the DHS
Silicon Valley Innovation Program commenting on why the approach taken with
some of these closed Digital Wallet ecosystems is problematic:

[https://lists.w3.org/Archives/Public/public-credentials/2021Oct/0005.html](https://lists.w3.org/Archives/Public/public-credentials/2021Oct/0005.html)

The W3C Decentralized Identifier WG, W3C Verifiable Credentials WG, and the
Credentials Community Group are working on open wallet ecosystems. Yet another
class of products and services that could be viewed as competitive.

There is concern over the individuals that work for these corporations being
biased in some way by the competing technologies and services that their
companies are producing. While these individuals are believed to be unbiased by
some and are not expected to just tow tow the company line... it's not
appropriate for them to be a part of the decision making process for their
company's formal objections because it raises doubt over the fairness of the
W3C Council Formal Objection process. That's the more damaging thing to W3C as
a community; accidentally fomenting distrust in the process. We're already
starting to see the first well-written opinion pieces hit the media outlets on
this concern:

[https://www.coindesk.com/business/2021/10/01/is-mozilla-trying-to-sabotage-distributed-identity/](https://www.coindesk.com/business/2021/10/01/is-mozilla-trying-to-sabotage-distributed-identity/)

[https://www.coincenter.org/open-blockchains-and-decentralized-identity-standards/](https://www.coindesk.com/business/2021/10/01/is-mozilla-trying-to-sabotage-distributed-identity/)

It was quite difficult to get many of these "decentralized technology" companies
to W3C and convince them that the browser vendors didn't run the show at W3C. It
took years of concerted effort, and it's exactly this sort of situation that
reassures their fears. Members of the DID Working Group have received a
substantive number of texts and emails since Apple, Google, and Mozilla's
formal objections, primarily due to the way they were raised and how they're
being processed. That said, the same could be levied against the organizations
supporting the publication of DIDs as a global standard. They too have
commercial interests. The concern is ensuring that everyone gets to make their
arguments on equal footing to the W3C Formal Objection Council, and progress
is being made to ensure that that happens.

### How long will this take?

There is no time limit set on when objections are upheld or rejected. It is
typically done within a month or two of the formal objections being raised,
but can drag on for months after that. There is recent news that expects
the Formal Objection Council to convene and take up this issue in the early
part of 2022.

### What could be done in the future to avoid this?

Probably not much; formal objections at the last minute can and do happen. It's
been this way for decades and is unlikely to change. This particular occurrence
is especially disruptive because of an experiment that is being run to determine
if the new formal objection process is acceptable to the membership.

There is, however, one aspect that the DID Working Group finds distasteful and
is currently not being considered for revision. Google, Apple, and Mozilla made
no attempt to bring their formal objections to the Decentralized Identifier
Working Group since the Working Group started, and then during the first
transition to Candidate Recommendation and then during the second transition to
Candidate Recommendation. The first time the group heard of these objections
during its two-year charter was in the days before the poll closed to approve
DID Core 1.0 as a W3C Recommendation.

There are courses of action that the W3C Membership can take to resolve this
(but again, this is currently a topic of debate):

Strike down formal objections that made no attempt to engage with the Working
Group. Allowing formal objections in the 11th hour accomplishes nothing other
than stress, distrust, and drama -- three things we don't need more of at W3C.
The W3C Process should be predictable, trustworthy, and boring.

### Who else has written about this?

You can read more about what's going on here:

[Does the W3C Still Believe in Tim Berners-Lee’s Vision of Decentralization?](https://www.evernym.com/blog/w3c-vision-of-decentralization/)
