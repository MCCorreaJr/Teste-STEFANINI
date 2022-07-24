const report = require('multiple-cucumber-html-reporter');

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s";
var dateTime = date+'_'+time;

report.generate({
	jsonDir: 'cypress/results/cucumber-json',
	reportPath: "cypress/results/reports",
	metadata:{
        browser: {
            name: 'Chrome',
            version: '86.0.4240.75'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Informações de Execução',
        data: [
            {label: 'Projeto', value: 'Teste-Stefanini'},
            {label: 'Release', value: '1.0.1'},
            {label: 'Data da Execução', value: `${dateTime}`}
        ]
    }
});