---
title: home
layout: home
type: parent
order: 1
---

<div class="section header">
	<div class="container">
<!-- 		<img src="{{ "/assets/img/logo.svg" | relative_url }}"> -->
		<h1 class="section-heading">  <a href="https://horatiowong.com" class="clickable-heading">Horatio Wong</a>
		</h1>
		<h4 class="section-description"> Photographer &#8226; Physicist &#8226; Videographer
		</h4>
		<div id="navbar-wrapper">
			<div id="navbar">
<!-- 				<img id="brand" class="hide" src="{{ "/assets/img/logo.svg" | relative_url }}"> -->
				{% assign mypages = site.pages | where: "type", "parent" | sort: "order" %}
				{% for page in mypages %}
				<a class="button" href="{{ page.url | relative_url }}">{{ page.title }}</a>
				{% endfor %}
			</div>
		</div>
	</div>
</div>

<div class="section main">
	<div class="container">
		<div class="row" id="gallery">
			{% assign coll = site.collections | where: "label", "home" | first %}
			{% assign list = coll.files | sort: "basename" %}
			<!--{% assign l = coll.files.size | divided_by: 2 | ceil %}-->
			<!-- <div class="column">
				{% for image in list limit: 1 %}
				<article class="thumb">
					<img class="lozad u-max-full-width" data-src="{{ coll.label | append: '/' | append: image.name }}" alt="{{ image.basename }}" />
				</article>
				{% endfor %}
			</div> -->
			<div class="one-half column">
				{% for image in list offset: l %}
				<article class="thumb">
					<img class="lozad u-max-full-width" data-src="{{ coll.label | append: '/' | append: image.name }}" alt="{{ image.basename }}" />
				</article>
				{% endfor %}
			</div>
		</div>
	</div>
</div>
