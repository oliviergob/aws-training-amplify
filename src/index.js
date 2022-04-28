require('./mystyles.scss');

const site_desciption = document.getElementById('site_description')



fetch('https://lx09ng1b5i.execute-api.us-east-1.amazonaws.com/prod/configuration').then(response =>{
    return response.json();
}).then(data =>{
    console.log(data.welcome_text);
    site_desciption.textContent =  data.welcome_text
})
