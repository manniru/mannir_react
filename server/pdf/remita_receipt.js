// playground requires you to assign document definition to a variable called dd

var dd = {
    header: {
        margin: 10,
        columns: [
            {
                // usually you would use a dataUri instead of the name for client-side printing
                // sampleImage.jpg however works inside playground so you can play with it
                image: 'assets/images/logo.png',
                width: 70,
                height: 70
            },
            {text: 'Mannir eSystems Nigeria Limited', style: 'header'},

            {
                margin: [10, 10, 0, 0],
                text: 'Developed By: Muhammad Mannir Ahmad'
            }
        ]
    },
    content: [
        'Here goes your content',
    ],
}

module.exports = dd