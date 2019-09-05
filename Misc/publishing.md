---
layout: default
---

# The practicalities of the self-publishing process for Working Drafts
{: .no_toc}

> **This guide is only valid for the publication of regular Working Drafts. Ie, not for FPWD, nor for Candidate Recommendations and beyond.**

Publishing the group’s Working Drafts is done via a combination of GitHub and a W3C tool called [Echidna](https://github.com/w3c/echidna/wiki). The high-level points to remember are described below. (All the examples use the `did-spec` repository as an example, the other repositories are set up in a similar fashion.)

1. There is a top-level folder called `snapshot` in the repository. This folder contains the document to be published. This folder contains the final document as generated from `respec`, plus the dependencies like css files and/or images.
2. There is a separate _branch_ in the repository called `publish_wd`.
3. Every time the `master` branch is merged **_into_** `publish_wd` (and pushed to the repository) the document is picked up from the `snapshot`, and is automatically published on the W3C site as the "latest version" of the official Working Draft.

What this means in practice is that the group can publish a Working Draft as often as its desires without any human intervention from the W3C staff.

The details of the process are below.

* TOC
{:toc}


## Prepare the `respec` source

The `respecConfig` content must be adapted. Most of these are to be set only once.

1. The data of each editor _must_ include the `w3cid` field, identifying the person in the W3C database. This number appears on the page of the person’s profile page at W3C; alternatively, the staff contact can find it.
2. Update the value of [`previousPublishDate`](https://github.com/w3c/respec/wiki/previousPublishDate) in `respecConfig` every time a publication happens. The value of `previousMaturity` should be kept on `WD`.

## Generate the final version of the document

The value of [`specStatus`](https://github.com/w3c/respec/wiki/specStatus) should _not_ be changed in the source; it should remain `ED`. Instead, when viewing the editor’s draft, use the following URL (or its local equivalent if you use a local server): [https://w3c.github.io/did-spec/?specStatus=WD&publishDate=2018-07-01](https://w3c.github.io/did-spec/?specStatus=FPWD&publishDate=2018-07-01) (setting the publication date as appropriate). Using this URL overwrites the values defined in `respecConfig` and the result is the right Working Draft format. Use then the standard `respec` mechanism to generate the final HTML to be put into `snapshot` folder.

## Modify (if necessary) the Echidna manifest

There is a top level file called ECHIDNA in the snapshot folder. This contains a list of files to be included in the final publication. This file must be modified if new dependences have been added since the last publication.

## Check the document

It is _required_ to run the document through the [W3C pubrules’ checker](https://www.w3.org/pubrules/) and _recommended_ to run it through the [W3C link checker](https://validator.w3.org/checklink). For both cases, the URL to the snapshot folder’s content should be used: [https://w3c.github.io/wpub/snapshot](https://w3c.github.io/wpub/snapshot/).

Note that, if the ECHIDNA file is incomplete (i.e., some resources are _not_ listed), the link checker will be successful and, nevertheless, the final publication may miss some links (the relevant resource is not copied to the target directory on the W3C server). You should always check whether the content of ECHIDNA is correct (or, alternatively, run the link checker once in a while on the published document rather than the snapshot).

## Merge the `master` branch into the `publish_wd` branch

You should probably do this on your local machine, using your preferred GitHub interface. Commit the changes onto GitHub.

You are done; the new version should appear as [https://www.w3.org/TR/did-spec/](https://www.w3.org/TR/did-spec/). It is worth checking the [`public-tr-notifications`](https://lists.w3.org/Archives/Public/public-tr-notifications/) mailing list archive to see if everything is o.k.; successful publications or errors are sent to that list.
