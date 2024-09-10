document.querySelector('.cta-button').addEventListener('click', () => { alert('Button Clicked!');});
const barCtx = document.getElementById('salesBarChart').getContext('2d');const salesBarChart = new Chart(barCtx, {type:'bar',
    data:{
        labels:['January','February','March','April','May','June','July'],
        datasets:[{ label: 'Sales',data: [120, 150, 300, 500, 800, 650, 900],backgroundColor: 'rgba(75, 192, 192, 0.6)',borderColor: 'rgba(75, 192, 192, 1)',borderWidth: 2, }]},
    options:{responsive: true,plugins: {
            legend:{
                position: 'top',
            },
            title:{
                display: true,
                text: 'Sales Data (2024)'}},
        scales: {y: {
                beginAtZero: true}},
        animation: {
            duration: 1500,
            easing: 'easeInOutBounce'
        } } });
