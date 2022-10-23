// array of products to be used
const productsArray = [
    {
        id: `rec43w3ipXvP28vog`,
        name: `High-Back Bench`,
        price: `9.99`,
        img: `https://dl.airtable.com/.attachmentThumbnails/d86e13eec1b200e2b21282b99a9382be/6d92321b`,
        category: `ikea`,
        description: `Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge`,
        quantity: `1`
    },
    {
        id: `rec4f2RIftFCb7aHh`,
        name: `Albany Table`,
        price: `79.99`,
        img: `https://dl.airtable.com/.attachmentThumbnails/ecc03714fd1ff14f50d98834615da483/30525671`,
        category: `marcos`,
        description: `Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge`,
        quantity: `1`
    },
    {
        id: `rec8kkCmSiMkbkiko`,
        name: `Accent Chair`,
        price: `25.99`,
        img: `https://dl.airtable.com/.attachmentThumbnails/ececf357189e0a6506cdb45152271a5c/e0407792`,
        category: `caressa`,
        description: `Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge`,
        quantity: `1`
    },
    {
        id: `recBohCqQsot4Q4II`,
        name: `Wooden Table`,
        price: `45.99`,
        img: `https://dl.airtable.com/.attachmentThumbnails/13b8798ce604dab29656905f94461083/2fcbbbba`,
        category: `caressa`,
        description: `Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge`,
        quantity: `1`
    },
    {
        id: `recDG1JRZnbpRHpoy`,
        name: `Dining Table`,
        price: `6.99`,
        img: `https://dl.airtable.com/.attachmentThumbnails/292e8c59ea4278c67509f457ed713c9e/dbcee29d`,
        category: `caressa`,
        description: `Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge`,
        quantity: `1`
    },
    {
        id: `recNWGyP7kjFhSqw3`,
        name: `Sofa Set`,
        price: `69.99`,
        img: `https://dl.airtable.com/.attachmentThumbnails/292e8c59ea4278c67509f457ed713c9e/dbcee29d`,
        category: `liddy`,
        description: `Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge`,
        quantity: `1`
    },
    {
        id: `recZEougL5bbY4AEx`,
        name: `Modern Bookshelf`,
        price: `8.99`,
        img: `https://dl.airtable.com/.attachmentThumbnails/bd412f9b69724bf7cb63542c9d72cc19/70f9bf4a`,
        category: `marcos`,
        description: `Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge`,
        quantity: `1`
    },
    {
        id: `recjMK1jgTb2ld7sv`,
        name: `Emperor Bed`,
        price: `21.99`,
        img: `https://dl.airtable.com/.attachmentThumbnails/a089f9304b965724c0e6828c96dd1a53/cf460909`,
        category: `liddy`,
        description: `Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge`,
        quantity: `1`
    },
    {
        id: `recmg2a1ctaEJNZhu`,
        name: `Utopia Sofa`,
        price: `39.95`,
        img: `https://dl.airtable.com/.attachmentThumbnails/ee08b908ae61c8241f56130eedefac0a/22e0d8df`,
        category: `marcos`,
        description: `Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge`,
        quantity: `1`
    },
    {
        id: `recvKMNR3YFw0bEt3`,
        name: `Entertainment Center`,
        price: `29.98`,
        img: `https://dl.airtable.com/.attachmentThumbnails/37c101731d977a9ff9c98530185b77e0/078958cd`,
        category: `liddy`,
        description: `Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge`,
        quantity: `1`
    },
    {
        id: `recxaXFy5IW539sgM`,
        name: `Albany Sectional`,
        price: `10.99`,
        img: `https://dl.airtable.com/.attachmentThumbnails/0f159a8ff208a1ca0683359d0bbcb204/dfa5455c`,
        category: `ikea`,
        description: `Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge`,
        quantity: `1`
    },
    {
        id: `recyqtRglGNGtO4Q5`,
        name: `Leather Sofa`,
        price: `9.99`,
        img: `https://dl.airtable.com/.attachmentThumbnails/0a5ef48cda665e63b6417fefb9998fff/668e4a7e`,
        category: `liddy`,
        description: `Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge`,
        quantity: `1`
    }
];

export { productsArray };