## DID Core Formal Objection FAQ

This is a single place that collects Frequently Asked Questions and
links about the recent set of objections that Google, Apple, and 
Mozilla filed against the W3C Decentralized Identifier specification.

1. [What is going on?](#what-is-going-on)
2. [Did the DID Working Group follow its charter?](#did-the-did-working-group-follow-its-charter)
3. [Was practical interoperability achieved?](#was-practical-interoperability-achieved)
4. [Is the DID specification decentralized enough?](#is-the-did-specification-decentralized-enough)
5. [Does the DID specification cause great environmental harm?](#does-the-did-specification-cause-great-environmental-harm)
6. [Why the concern over Google, Apple, and Mozilla objecting?](#why-the-concern-over-google-apple-mozilla-objecting)
7. [How long will this take?](#how-long-will-this-take)

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
to be the first through this new process.

There are four aspects of how this is playing out that are deeply concerning:

1. The objectors (Google, Apple, and Mozilla), and the proponents (over 40
companies) collectively hold 7 out of the 21 seats on the W3C Council. This
enables 1/3rd of the W3C Council who are taking a position on the formal
objection to engage in what is supposed to be an impartial process.

2. The new W3C Council Formal Objection Process gently suggests that
individuals that might have a conflict of interest can voluntarily recuse
themselves; the decision is left up to the individual. Apple has raised a
formal objection and sits on both the W3C AB and W3C TAG; are both individuals
expected to recuse themselves? The hope is that the answer to this question is "Yes,
because the formal objection is on behalf of Apple and therefore, there is a
conflict of interest." The same recusal issue applies to Google's representatives.

3. The W3C Team, who have a long and positive track record of striking the
right balance when providing input into these sorts of decisions, have been
stripped of any decision making authority.

4. Lastly, Google, Apple, and Mozilla made no attempt to bring their formal
objections to the Decentralized Identifier Working Group since the Working
Group started, and then during the first transition to Candidate
Recommendation and then during the second transition to Candidate
Recommendation. The first time the group heard of these objections during its
two-year charter was in the days before the poll closed to approve DID Core
1.0 as a W3C Recommendation.

That is, in a nutshell, what is going on.

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
[DID Rubric]https://www.w3.org/TR/did-rubric/), intends to continue this
discussion in future WGs, and welcomes others to contribute to the 
authoring of this sort of material.

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
