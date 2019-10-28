
![W3C Logo](https://www.w3.org/Icons/w3c_home)

# Decentralized Identifier Working Group

This is the repository for the home page of the W3C DID Working Group:

https://www.w3.org/2019/did-wg/

(That URL is redirected to the `w3c.github.io` view of this repository.)

## Specifications

GitHub repositories are linked from each specification. There is a separate [list of repos of this WG](https://github.com/search?q=topic%3Adid-wg+org%3Aw3c&type=Repositories).


## Contributing to the DID Working Group Repositories

Use the standard fork, branch, and pull request workflow to propose changes to the specification. Please make branch names informative—by including the issue or bug number for example.

Editorial changes that improve the readability of the spec or correct spelling or grammatical mistakes are welcome.

Please read [CONTRIBUTING.md](CONTRIBUTING.md), about licensing contributions.

### DID Working Group Repositories

* [W3C Decentralized Identifier Specification v1.0](https://github.com/w3c/did-core)
* [Home page of the Decentralized Identifier Working Group](https://github.com/w3c/did-wg)
* [Specs and documentation for all DID-related /.well-known resources](https://github.com/decentralized-identity/.well-known)
* [W3C Decentralized Characteristics Rubric v1.0](https://github.com/w3c/did-rubric)
* [Decentralized Identifier Use Cases v1.0](https://github.com/w3c/did-use-cases)
* [W3C DID Test Suite and Implementation Report](https://github.com/w3c/did-test-suite)


## Meetings

Our kickoff meeting will be September 16-17, 2019, at [TPAC](https://www.w3.org/2019/09/TPAC/Overview.html).
Details for participation are located on our [meeting page](Meetings/F2F/2019.09.Fuk.md).

## Tools

Generating weekly minutes is done via the
[scribejs](https://github.com/w3c/scribejs) script and some additional
configuration settings provided in this repo (see `.scribejs.json`).

To use this repository's scribejs setup first install the tools...

```bash
$ npm install
```

Then run the following (with date
information changed to match your scenario):

```bash
$ npm run scribejs -- -d 2018-07-06 -o _minutes/2019-10-06-did-wg.md
```

This will request the IRC logs for the correct channel and convert them into
the Kramdown (a more feature rich form of Markdown) with settings to match this
repositories other documents.

If you need to make edits to the IRC log before generating the output (due to
incorrect scribenick or similar), you can download the W3C logs from URLs such
as `https://www.w3.org/2019/10/06-did-wg-irc.txt`. Once downloaded, you can
reference that input document directly (rather than using the automatic
date-based retrieval).

For example:

```bash
$ curl https://www.w3.org/2019/10/06-did-wg-irc.txt > 2019-10-06-did-irc.txt
$ npm run scribejs -- 2019-10-06-did-irc.txt -d 2019-10-06 -o _minutes/2019-10-06-did.md
```

Edit the .txt file and repeat the `npm run scribejs` line as necessary. Once
finished, you can commit the `.md` file and delete the `.txt` file (or keep it
for your records).

Alternatively, you can also use the [browser interface to scribejs](https://w3c.github.io/scribejs/BrowserView/) relying on your local clone of the WG's repository.

### Jekyll

This site is built for [Jekyll](https://jekyllrb.com/). If you have Jekyll
and npm installed, you can run `npm run serve` to have Jekyll watch the
working directory for changes and compile the templates (etc) incrementally.

Once run, you can browse the site at `http://localhost:4000/2019/did-wg/`
(the extra path information is *required* to match the w3.org hosting location).
