# ionic-social-share-web
Share event page from Ionic Web for Magnet.

## Install

```sh
$ bower install https://github.com/tanmaydesai89/ionic-social-share-web.git
```

## Include

For featured event list:

```sh
<div class="col" share-square="true" share-links="Facebook, Twitter, LinkedIn, GooglePlus" share-title="{{event.name}}" share-id="{{event.id}}" share-text="Checkout this event on Magnet: "></div>
```

For registered event list:

```sh
<div class="col" share-square="true" share-links="Facebook, Twitter, LinkedIn, GooglePlus" share-title="{{event.name}}" share-id="{{event.id}}" share-text="I am attendeing this event on Magnet: "></div>
```