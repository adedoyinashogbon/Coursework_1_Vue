let webstore = new Vue ({
    el:"#app",
    data: {
        activeSection: 'home', //default page 
        lessons: [
            { name: 'Mathematics', description: '' },
            { name: 'English', description: '' },
            { name: 'Coding for Beginners', description: '' },
            { name: 'Music', description: '' },
            { name: 'Creative Arts', description: '' },
            { name: 'Physical Education', description: '' },
            { name: 'Dance', description: '' },
            { name: 'Drama', description: '' },
            { name: 'Chess', description: '' },
            { name: 'Entrepreneurship', description: '' }
        ]
    },
    methods: {
        showSection(section){
            this.activeSection = section;
        }
    }
});