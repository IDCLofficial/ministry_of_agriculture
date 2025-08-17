type event = {
  slug: string,
  date: string,
  location: string,
  title: string,
  description: string,
  img: string,
  time: string,
  organizer: string,
  phone: string,
  address: string,
  speakers?: [{
    name: string,
    img: string,
    role: string
  }]
}

const events: event[] = [];

export default events; 