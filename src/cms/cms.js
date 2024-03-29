import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import EventsPagePreview from './preview-templates/EventsPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('events', EventsPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
