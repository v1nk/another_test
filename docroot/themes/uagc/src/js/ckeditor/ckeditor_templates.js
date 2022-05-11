// Override the default template set
CKEDITOR.addTemplates( 'default', {
	// The name of sub folder which hold the shortcut preview images of the
	// templates.  Determine base path of drupal installation if any
	// (ckeditor could possibly be loaded w/o drupalSettings).
	imagesPath: ((drupalSettings && drupalSettings.path) ? drupalSettings.path.baseUrl : '/') + 'themes/uagc/src/images/ckeditor/',

	// The templates definitions.
	templates: [ {
		title: 'Title and Featured Text',
		image: 'template2.gif',
		description: 'A title and a featured text side by side.',
		html: '<div class="section__content">' +
      '<h3 class="section__content__title">Description text here</h3>' +
			'<h2 class="section__content__featured-text">Featured text here</h2>' +
    '</div>'
	} ]
} );
