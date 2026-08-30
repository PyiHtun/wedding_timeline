
import './style.css'

const icons = {
  arrival: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M21 12h22v40H21z"/>
      <path d="M16 52h32"/>
      <path d="M28 18h8M28 25h8M28 32h8"/>
      <path d="M38 41h1"/>
    </svg>`,
  rings: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="25" cy="34" r="13"/>
      <circle cx="39" cy="30" r="13"/>
      <path d="M44 12l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>
    </svg>`,
  camera: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M15 23h9l4-6h9l4 6h8a5 5 0 0 1 5 5v21H10V28a5 5 0 0 1 5-5z"/>
      <circle cx="32" cy="36" r="9"/>
      <path d="M46 29h1"/>
    </svg>`,
  reception: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M14 21l18-10 18 10"/>
      <path d="M18 21v31h28V21"/>
      <path d="M25 52V36h14v16"/>
      <path d="M23 28h4M37 28h4"/>
    </svg>`,
  drinks: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M14 14h16l-2 19a7 7 0 0 1-7 6 7 7 0 0 1-7-6z"/>
      <path d="M21 39v12M15 51h12"/>
      <path d="M36 17h14l-2 16a6 6 0 0 1-6 5 6 6 0 0 1-6-5z"/>
      <path d="M42 38v13M36 51h12"/>
    </svg>`,
  grill: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M15 27h34a17 17 0 0 1-34 0z"/>
      <path d="M20 44l-5 9M44 44l5 9"/>
      <path d="M25 13c-4 4 4 6 0 10M36 10c-5 5 5 7 0 12"/>
    </svg>`,
  cake: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 28h28v10H18zM14 38h36v13H14z"/>
      <path d="M32 14v8"/>
      <path d="M28 18c0-3 2-5 4-7 2 2 4 4 4 7a4 4 0 0 1-8 0z"/>
      <path d="M22 28v-5M42 28v-5"/>
    </svg>`,
  music: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M27 14v31"/>
      <path d="M27 17l23-5v29"/>
      <ellipse cx="20" cy="47" rx="7" ry="5"/>
      <ellipse cx="43" cy="43" rx="7" ry="5"/>
    </svg>`,
  food: `
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M11 20h42"/>
      <path d="M16 20a16 16 0 0 0 32 0"/>
      <path d="M14 46h36"/>
      <path d="M22 13v7M32 10v10M42 13v7"/>
    </svg>`
}

const links = {
  curveWebsite: 'https://curvevenue.uk/visit-us',
  curveMap: 'https://maps.app.goo.gl/2Sdt9661WDWZfZxt5',
  crownWebsite: 'https://www.crown-inn.co.uk',
  crownMap: 'https://www.google.com/maps/search/?api=1&query=The+Crown+Inn+Crown+Lane+Farnham+Royal+SL2+3SQ'
}

const timeline = [
  {
    time: '11:30 AM',
    title: 'Guest Arrival',
    subtitle: 'Slough Register Office · The Curve',
    icon: 'arrival',
    venue: 'Slough Register Office – The Curve',
    detail: 'Please arrive in good time for registration and seating before the ceremony begins.',
    website: links.curveWebsite,
    map: links.curveMap,
    image: './images/TheCurve.png',
    imageAlt: 'Slough Register Office at The Curve'
  },
  {
    time: '12:00 PM',
    title: 'Wedding Ceremony',
    subtitle: '12:00 PM – 1:00 PM',
    icon: 'rings',
    venue: 'Slough Register Office – The Curve',
    detail: 'The wedding ceremony takes place at The Curve.',
    website: links.curveWebsite,
    map: links.curveMap,
    image: './images/TheCurve.png',
    imageAlt: 'Wedding ceremony venue'
  },
  {
    time: '1:00 PM',
    title: 'Photos',
    subtitle: 'Family & wedding photographs',
    icon: 'camera',
    venue: 'The Curve',
    detail: 'Family, group and couple photographs after the ceremony.',
    website: links.curveWebsite,
    map: links.curveMap,
    image: './images/photos-sketch.svg',
    imageAlt: 'Simple sketch for wedding photography'
  },
  {
    time: '2:00 PM -  12:00 AM',
    title: 'Wedding Reception & Welcome',
    subtitle: 'The Crown Inn',
    icon: 'reception',
    venue: 'The Crown Inn',
    detail: 'Arrive at The Crown Inn for the reception and welcome.',
    website: links.crownWebsite,
    map: links.crownMap,
    image: './images/the-crown-inn-outside_1.jpg',
    imageAlt: 'The Crown Inn wedding reception venue',
    groupStart: true
  },
  {
    time: '2:30 PM',
    title: 'Welcome Drinks & Canapés',
    subtitle: 'Sharing boards on arrival',
    icon: 'drinks',
    detail: 'Welcome drinks and canapé station.',
    image: './images/the-crown-inn-garden_1.webp',
    imageAlt: 'Welcome drinks in The Crown Inn garden',
    nested: true,
    menu: {
      title: 'Welcome Canapés',
      sections: [
        {
          items: [
            'Creamy Rock Shrimp Tempura',
            'Fries',
            'Cheese Mix with Cherry Tomatoes',
            'Crispy Pork Belly Bites with Hoisin Mayo',
            'Salt & Pepper Calamari with Sweet Chilli Mayo & Lime',
            'Crown House Hummus, Olives & Bread',
            'Korean Fried Chicken Bites'
          ]
        }
      ]
    }
  },
  {
    time: '4:00/4:30 PM',
    title: 'From the Grill',
    subtitle: 'Fresh from the Grill with sides, salads & desserts',
    icon: 'grill',
    detail: 'A relaxed grill service with sharing boards, sides and desserts.',
    image: './images/the-crown-inn-garden_2.jpg',
    imageAlt: 'Grill service at The Crown Inn',
    nested: true,
    menu: {
      title: 'From the Grill',
      sections: [
        {
          heading: 'From the Grill',
          items: [
            'Jerk-Spiced Marinated Chicken',
            'Sirloin Steak',
            "Kids' Burgers",
            'Grilled Sardines with Gremolata Sauce',
            'Grilled Sea Bass with Lemon & Chilli',
            'Spicy Polish & South African Sausages'
          ]
        },
        {
          heading: 'Vegetarian & Sides',
          items: [
            'Vegetable Brochettes',
            'Tamarind Squash & Halloumi Skewers',
            'Fries',
            'Creamy Potato Salad with Chives',
            'Spicy Cucumber Salad',
            'Feta & Watermelon Salad with Mint',
            'Rice & Cumin-Roasted Squash',
            'Greek Salad'
          ]
        },
        {
          heading: 'Desserts',
          items: [
            'Ice Cream',
            'Classic Crème Brûlée',
            'Strawberry Fool',
            'Wedding Cake'
          ]
        }
      ]
    }
  },
  {
    time: '7:00 PM',
    title: 'Cake Cutting',
    subtitle: 'Followed by DJ & dancing',
    icon: 'cake',
    detail: 'Cake cutting followed by music, dancing and drinks.',
    image: './images/cake-cutting-sketch.svg',
    imageAlt: 'Simple wedding cake sketch illustration',
    nested: true
  },
  {
    time: '7:15 PM',
    title: 'DJ & Dancing',
    subtitle: 'Celebrate with us',
    icon: 'music',
    detail: 'DJ, dancing, drinks and evening celebration.',
    image: './images/dj-dancing.jpg',
    imageAlt: 'DJ and dancing at The Crown Inn',
    nested: true
  },
  {
    time: '10:00–10:30 PM',
    title: 'After-Dark Sharing Boards',
    subtitle: 'Burgers & sandwiches',
    icon: 'food',
    detail: 'Late-evening bites with a delicious selection of burgers & sandwiches.',
    image: './images/mini-burges.png',
    imageAlt: 'Mini burgers and sandwiches',
    nested: true,
  }
]

function eventMarkup(item, index) {
  const nestedClass = item.nested ? ' timeline-item--nested' : ''
  const groupClass = item.groupStart ? ' timeline-item--group-start' : ''

  return `
    <button
      class="timeline-item${nestedClass}${groupClass}"
      type="button"
      data-index="${index}"
      aria-label="${item.time}, ${item.title}. Open details"
    >
      <span class="timeline-icon">${icons[item.icon]}</span>
      <span class="timeline-marker" aria-hidden="true"></span>
      <span class="timeline-copy">
        <span class="timeline-time">${item.time}</span>
        <span class="timeline-title">${item.title}</span>
        <span class="timeline-subtitle">${item.subtitle ?? ''}</span>
      </span>
    </button>
  `
}

document.querySelector('#app').innerHTML = `
  <div class="page">
    <header class="hero">
      <p class="eyebrow">Ohnmar & Marcin</p>
      <h1>Our Wedding Day</h1>
      <p class="hero-note">Relaxed celebration. Dress code: Come as you are.</p>
      <p class="date">Tap any event for more details</p>
    </header>

    <section class="timeline" aria-label="Wedding day timeline">
      ${timeline.map(eventMarkup).join('')}
    </section>

    <footer class="footer">
      <p>We can't wait to celebrate with you.</p>
    </footer>
  </div>

  <div class="modal-backdrop" hidden></div>

  <section
    class="event-sheet"
    role="dialog"
    aria-modal="true"
    aria-labelledby="sheet-title"
    hidden
  >
    <button class="sheet-close" type="button" aria-label="Close details">×</button>

    <div class="sheet-image-wrap">
      <img class="sheet-image" alt="" />
      <div class="sheet-image-placeholder" hidden>Venue photo</div>
    </div>

    <p class="sheet-time"></p>
    <h2 id="sheet-title"></h2>
    <p class="sheet-venue"></p>
    <p class="sheet-detail"></p>

    <div class="sheet-menu" hidden></div>

    <div class="sheet-links">
      <a class="sheet-link venue-link" target="_blank" rel="noreferrer" hidden>
        <span>Open venue website</span>
        <span aria-hidden="true">↗</span>
      </a>

      <a class="sheet-link map-link" target="_blank" rel="noreferrer" hidden>
        <span>Open in Google Maps</span>
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  </section>
`

const sheet = document.querySelector('.event-sheet')
const backdrop = document.querySelector('.modal-backdrop')
const closeButton = document.querySelector('.sheet-close')
const sheetImage = document.querySelector('.sheet-image')
const sheetImagePlaceholder = document.querySelector('.sheet-image-placeholder')
const venueLink = document.querySelector('.venue-link')
const mapLink = document.querySelector('.map-link')
const menuContainer = document.querySelector('.sheet-menu')

let lastFocused = null

function closeSheet() {
  sheet.hidden = true
  backdrop.hidden = true
  document.body.classList.remove('modal-open')

  if (lastFocused) {
    lastFocused.focus()
  }
}

function openSheet(index, trigger) {
  const item = timeline[index]
  lastFocused = trigger

  sheet.querySelector('.sheet-time').textContent = item.time
  sheet.querySelector('#sheet-title').textContent = item.title
  sheet.querySelector('.sheet-venue').textContent =
      item.venue ?? (item.nested ? 'The Crown Inn' : '')
  sheet.querySelector('.sheet-detail').textContent = item.detail ?? ''

  if (item.image) {
    sheetImage.hidden = false
    sheetImagePlaceholder.hidden = true
    sheetImage.src = item.image
    sheetImage.alt = item.imageAlt ?? ''

    sheetImage.onerror = () => {
      sheetImage.hidden = true
      sheetImagePlaceholder.hidden = false
    }
  } else {
    sheetImage.hidden = true
    sheetImagePlaceholder.hidden = false
  }

  if (item.menu) {
    menuContainer.hidden = false
    menuContainer.innerHTML = `
      <div class="menu-card">
        <p class="menu-label">MENU</p>
        <h3>${item.menu.title}</h3>

        ${item.menu.sections.map(section => `
          <div class="menu-section">
            ${section.heading ? `<h4>${section.heading}</h4>` : ''}
            <ul>
              ${section.items.map(food => `<li>${food}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    `
  } else {
    menuContainer.hidden = true
    menuContainer.innerHTML = ''
  }

  if (item.website) {
    venueLink.hidden = false
    venueLink.href = item.website
  } else {
    venueLink.hidden = true
    venueLink.removeAttribute('href')
  }

  if (item.map) {
    mapLink.hidden = false
    mapLink.href = item.map
  } else {
    mapLink.hidden = true
    mapLink.removeAttribute('href')
  }

  sheet.hidden = false
  backdrop.hidden = false
  document.body.classList.add('modal-open')
  closeButton.focus()
}

document.querySelectorAll('.timeline-item').forEach(button => {
  button.addEventListener('click', () => {
    openSheet(Number(button.dataset.index), button)
  })
})

closeButton.addEventListener('click', closeSheet)
backdrop.addEventListener('click', closeSheet)

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !sheet.hidden) {
    closeSheet()
  }
})
