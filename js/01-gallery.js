import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')
const items = []

galleryItems.forEach(elem => {
	const galleryItem = document.createElement('div')
	galleryItem.className = 'gallery__item'
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = elem.original
	const galleryImage = document.createElement('img')
    galleryImage.className = 'gallery__image'
    galleryImage.src = elem.preview;
    galleryImage.setAttribute('data-source', elem.original)
    galleryImage.alt = elem.description;

	galleryItem.append(galleryLink)
	galleryLink.append(galleryImage)
	items.push(galleryItem)
})

gallery.append(...items)

gallery.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`<img src="${selectedImage}" width="600" height="400">`)

    instance.show()
    
    gallery.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close()
		}
	})
})