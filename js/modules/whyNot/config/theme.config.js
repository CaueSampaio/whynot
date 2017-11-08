// codeNetwork.config(function($mdThemingProvider) {
whyNotApp.config(function($mdThemingProvider) {
    
    $mdThemingProvider.definePalette('networkTheme', {
        '50': 'E2E7E8',
        '100': 'B6C2C5',
        '200': '869A9E',
        '300': '557177',
        '400': '30525A',
        '500': '0C343D',
        '600': '0A2F37',
        '700': '08272F',
        '800': '062127',
        '900': '03151A',
        'A100': '58CFFF',
        'A200': '25C1FF',
        'A400': '00ACF1',
        'A700': '009AD8'
    });

    $mdThemingProvider.theme('default')
        .primaryPalette('red')
});