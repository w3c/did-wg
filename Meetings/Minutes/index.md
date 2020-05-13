---
layout: default
---

# Meeting Minutes
{: .no_toc}

* TOC
{:toc}


{% assign yearly_minutes = site.minutes | group_by_exp: "item", "item.date | date: '%Y'" %}

{% for year in yearly_minutes reversed %}

## {{ year.name }}

<ul>
{% for item in year.items reversed %}
  <li>
    {% if item.url contains "did-topic" %}
        <a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
    {% else %}
        <a href="{{ site.baseurl }}{{ item.url }}"><em>{{ item.title }}</em></a>
    {% endif %}
  </li>
{% endfor %}
</ul>

{% endfor %}
