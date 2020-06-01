document.querySelector('.tabs__header').addEventListener('click', function(e) {
    if (e.target.className == 'tab__h') {        
        var dataTab = e.target.getAttribute('data-tab'); 
        var tabH = document.getElementsByClassName('tab__h');
        for (var i = 0; i < tabH.length; i++) {
            tabH[i].classList.remove('active');
        }

        var tabBody = document.querySelectorAll('.tab__b');
        e.target.classList.add('active');
        for ( var i = 0; i < tabBody.length; i++) {
            if (dataTab == i) {
                tabBody[i].style.display = 'block';
            }
            else {
                tabBody[i].style.display = 'none';
            }
        }        
    }
        
});