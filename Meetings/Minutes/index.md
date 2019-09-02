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
  <li>{{ item.date | date: '%d %B' }}:
    <a href="{{ site.baseurl }}{{ item.url }}">Telco Minutes</a>
  </li>
{% endfor %}
</ul>

{% endfor %}
