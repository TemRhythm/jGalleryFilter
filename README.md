jGalleryFilter
==============

jQuery plugin for animated filter by tags for your image or photo gallery

Sample
==============

```javascript
        $(document).ready(function () {
            $("#gallery").galleryFilter(
            {
              itemsGroupHeaderTagName:'header',
              filters:'#filters',
              items:'#items',
              itemWidth:'100px',
              itemHeight:'75px'
            });
        });
```
```html
  <section id="gallery">
    <div id="filters">
        <ul>
            <li><a rel="all" href="#">all</a></li>
            <li><a rel="flora" href="#">flora</a></li>
            <li><a rel="fauna" href="#">fauna</a></li>
            <li><a rel="inanimate" href="#">inanimate</a></li>
        </ul>
    </div>
    <div id="items">
        <div>
            <header>2005</header>
            <ul>
                <li rel="flora"><img src="img/Tulips.jpg" alt="Tulips"></li>
                <li rel="inanimate"><img src="img/Desert.jpg" alt="Desert"></li>
            </ul>
        </div>
        <div>
            <header>2006</header>
            <ul>
                <li rel="inanimate"><img src="img/Lighthouse.jpg" alt="Lighthouse"></li>
                <li rel="fauna"><img src="img/Penguins.jpg" alt="Penguins"></li>
                <li rel="flora"><img src="img/Chrysanthemum.jpg" alt="Chrysanthemum"></li>
            </ul>
        </div>
        <div>
            <header>2007</header>
            <ul>
                <li rel="flora"><img src="img/Hydrangeas.jpg" alt="Hydrangeas"></li>
                <li rel="fauna"><img src="img/Jellyfish.jpg" alt="Jellyfish"></li>
                <li rel="fauna"><img src="img/Koala.jpg" alt="Koala"></li>
            </ul>
        </div>
    </div>
  </section>  
```

Options
==============
<p><b>itemsGroupHeaderTagName</b> - tag name, class name (like '.myCssClass') or id (like '#myIdName') of group headers.</p>
<p><b>filters</b> - element id with filters list (like div with ul or ol).</p>
<p><b>items</b> - container element id with items (images or photos).</p>
<p><b>itemWidth</b> - with of photos or images using in gallery.</p>
<b>itemHeight</b> - height of photos or images using in gallery.
