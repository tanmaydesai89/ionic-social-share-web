'use strict';

angular.module('td.easySocialShare', [])
  .directive('shareLinks', ['$location', function ($location) {
    return {
      link: function (scope, elem, attrs) {
        var i,
            sites = ['twitter', 'facebook', 'linkedin', 'googleplus'],
            theLink,
            links = attrs.shareLinks.toLowerCase().split(','),
            pageLink = 'https://getmagnet.co/' + attrs.shareId,
            pageTitle = attrs.shareTitle,
            pageShareText = attrs.shareText,
            shareLinks = [],
            square = '';

        elem.addClass('td-easy-social-share');

        // check if square icon specified
        square = (attrs.shareSquare && attrs.shareSquare.toString() === 'true') ? '-square' : '';

        // assign share link for each network
        angular.forEach(links, function (key) {
          key = key.trim();

          switch (key) {
            case 'twitter':
              theLink = 'http://twitter.com/intent/tweet?text=' + pageShareText + pageTitle + '%20' + pageLink;
              break;
            case 'facebook':
              theLink = 'http://facebook.com/sharer.php?u=' + pageLink;
              break;
            case 'linkedin':
              theLink = 'http://www.linkedin.com/shareArticle?mini=true&url=' + pageLink + '&title=' + pageTitle;
              break;
            case 'googleplus':
              theLink = 'https://plus.google.com/share?url=' + pageLink;
              break;
          }

          if (sites.indexOf(key) > -1) {
            shareLinks.push({network: key, url: theLink});
          }
        });

        var anchor = '<a class="button button-clear button-icon">Share on: </a>';
        for (i = 0; i < shareLinks.length; i++) {
          
          anchor += '<a href="'+ shareLinks[i].url + '"';
          anchor += ' class="button button-clear button-icon" target="_blank"><i class="ion-social-'+shareLinks[i].network ;
          anchor += '"></i></a>';
          
        }
        elem.append(anchor);
      }
    };
  }]);
