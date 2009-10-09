new TWTR.Widget({
    profile: true,
    id: 'twtr-profile-widget',
    loop: true,
    width: 250,
    height: 300,
    theme: {
        shell: {
            background: '#3082af',
            color: '#ffffff'
        },
        tweets: {
            background: '#ffffff',
            color: '#444444',
            links: '#1985b5'
        }
    }
}).render().setProfile('dougalcorn').start();
