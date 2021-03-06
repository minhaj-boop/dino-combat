const dinos = [
    {
        key: '1',
        name: 'Arcocanthosaurus',
        health: 4800,
        damage: 1700,
        speed: 103,
        rarity: 'unique',
        img: 'img/Acrocanthosaurus_Icon.png'
    },
    {
        key: '2',
        name: 'Allosinosaurus',
        health: 4500,
        damage: 1800,
        speed: 106,
        rarity: 'legendary',
        img: 'img/Allosinosaurus_icon.png'
    },
    {
        key: '3',
        name: 'Ankylosaurus',
        health: 4650,
        damage: 1000,
        speed: 106,
        rarity: 'epic',
        img: 'img/Ankylosaurus_Icon.png'
    },
    {
        key: '4',
        name: 'Ardentismaxima',
        health: 5700,
        damage: 1200,
        speed: 109,
        rarity: 'unique',
        img: 'img/Ardentismaxima_Icon.jpg'
    },
    {
        key: '5',
        name: 'Baryonyx',
        health: 4200,
        damage: 1400,
        speed: 126,
        rarity: 'epic',
        img: 'img/Baryonyx_icon.jpg'
    },
    {
        key: '6',
        name: 'Blue',
        health: 2400,
        damage: 1300,
        speed: 131,
        rarity: 'epic',
        img: 'img/Blue_icon.jpg'
    },
    {
        key: '7',
        name: 'Brachisaurus',
        health: 6000,
        damage: 1000,
        speed: 111,
        rarity: 'epic',
        img: 'img/Brachiosaurus_Icon.jpg'
    },
    {
        key: '8',
        name: 'Ceramagnus',
        health: 4500,
        damage: 1300,
        speed: 113,
        rarity: 'apex',
        img: 'img/Ceramagnus_Icon.jpg'
    },
    {
        key: '9',
        name: 'Diorajasaur',
        health: 4500,
        damage: 1200,
        speed: 108,
        rarity: 'unique',
        img: 'img/Diorajasaur_icon.png'
    },
    {
        key: '10',
        name: 'Diplodocus',
        health: 6000,
        damage: 1500,
        speed: 104,
        rarity: 'epic',
        img: 'img/Diplodocus_Icon.jpg'
    },
    {
        key: '11',
        name: 'Dracoceratops',
        health: 4200,
        damage: 1500,
        speed: 115,
        rarity: 'legendary',
        img: 'img/Dracoceratops_icon.png'
    },
    {
        key: '12',
        name: 'E752',
        health: 4050,
        damage: 1350,
        speed: 119,
        rarity: 'unique',
        img: 'img/E752_icon.png'
    },
    {
        key: '13',
        name: 'Erlikosaurus',
        health: 3000,
        damage: 1400,
        speed: 129,
        rarity: 'epic',
        img: 'img/Erlikosaurus_icon.png'
    },
    {
        key: '14',
        name: 'Erlikospyx',
        health: 4200,
        damage: 1500,
        speed: 128,
        rarity: 'unique',
        img: 'img/Erlikospyx_Icon.png'
    },
    {
        key: '15',
        name: 'Grypolyth',
        health: 4200,
        damage: 1250,
        speed: 106,
        rarity: 'unique',
        img: 'img/Grypolyth_icon.png'
    },
    {
        key: '16',
        name: 'Hadros Lux',
        health: 5100,
        damage: 1350,
        speed: 108,
        rarity: 'apex',
        img: 'img/Hadros_Lux_Icon.jpg'
    },
    {
        key: '17',
        name: 'Indominus Rex',
        health: 4500,
        damage: 1500,
        speed: 107,
        rarity: 'legendary',
        img: 'img/Indominus_rex_Icon.jpg'
    },
    {
        key: '18',
        name: 'Indoraptor',
        health: 4200,
        damage: 1400,
        speed: 128,
        rarity: 'unique',
        img: 'img/Indoraptor_icon.png'
    },
    {
        key: '19',
        name: 'Kentrosaurus',
        health: 3600,
        damage: 1000,
        speed: 112,
        rarity: 'epic',
        img: 'img/Kentrosaurus_Icon.png'
    },
    {
        key: '20',
        name: 'Magnapyritator',
        health: 3900,
        damage: 1450,
        speed: 128,
        rarity: 'unique',
        img: 'img/Magnapyritor_icon.png'
    },
    {
        key: '21',
        name: 'Monolometrodon',
        health: 4200,
        damage: 1400,
        speed: 125,
        rarity: 'legendary',
        img: 'img/Monolometrodon_Icon.jpg'
    },
    {
        key: '22',
        name: 'Monolophosaurus',
        health: 3000,
        damage: 1300,
        speed: 127,
        rarity: 'epic',
        img: 'img/Monolophosaurus_Icon.jpg'
    },
    {
        key: '23',
        name: 'Mortem Rex',
        health: 4500,
        damage: 2000,
        speed: 108,
        rarity: 'apex',
        img: 'img/Mortem_rex_Icon.png'
    },
    {
        key: '24',
        name: 'Oranosaurus',
        health: 3600,
        damage: 1500,
        speed: 104,
        rarity: 'epic',
        img: 'img/Ouranosaurus_icon.jpg'
    },
    {
        key: '25',
        name: 'Pteranodon',
        health: 3600,
        damage: 900,
        speed: 127,
        rarity: 'epic',
        img: 'img/Pteranodon_Icon.jpg'
    },
    {
        key: '26',
        name: 'Pyroraptor',
        health: 3150,
        damage: 1500,
        speed: 129,
        rarity: 'epic',
        img: 'img/Pyroraptor_Icon.jpg'
    },
    {
        key: '27',
        name: 'Rajasaurus',
        health: 4200,
        damage: 1000,
        speed: 104,
        rarity: 'epic',
        img: 'img/Rajasaurus_icon.jpg'
    },
    {
        key: '28',
        name: 'Secodontosauraus',
        health: 3900,
        damage: 1500,
        speed: 114,
        rarity: 'epic',
        img: 'img/Secodontosaurus_icon.jpg'
    },
    {
        key: '29',
        name: 'Sinoceratops',
        health: 3300,
        damage: 1000,
        speed: 107,
        rarity: 'epic',
        img: 'img/Sinoceratops_Icon.png'
    },
    {
        key: '30',
        name: 'Sonorasaurus',
        health: 5350,
        damage: 1000,
        speed: 105,
        rarity: 'epic',
        img: 'img/Sonorasaurus_Icon.jpg'
    },
    {
        key: '31',
        name: 'Stygimoloch',
        health: 3150,
        damage: 1500,
        speed: 129,
        rarity: 'epic',
        img: 'img/Stygimoloch_Icon.png'
    },
    {
        key: '32',
        name: 'Tenontorex',
        health: 4500,
        damage: 1900,
        speed: 109,
        rarity: 'unique',
        img: 'img/Tenontorex_icon.png'
    },
    {
        key: '33',
        name: 'Thoradolosaur',
        health: 4500,
        damage: 1750,
        speed: 105,
        rarity: 'epic',
        img: 'img/Thoradolosaur_icon.png'
    },
    {
        key: '34',
        name: 'Trykosaurus',
        health: 4200,
        damage: 1600,
        speed: 108,
        rarity: 'unique',
        img: 'img/Trykosaurus_icon.png'
    },
    {
        key: '35',
        name: 'Tyrannosauraus Rex',
        health: 4500,
        damage: 1900,
        speed: 102,
        rarity: 'epic',
        img: 'img/Tyrannosaurus_rex_Icon.png'
    }
]