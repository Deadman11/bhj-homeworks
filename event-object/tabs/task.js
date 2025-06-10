let tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = document.querySelectorAll('.tab__content')

function chengeActiveTabs(){
    for(const tab of tabs){
        tab.classList = "tab"
    }
    for (const tabContent of tabsContent) {
        tabContent.classList = "tab__content"
    }

    let i = tabs.indexOf(this);

    tabs[i].classList = "tab tab_active";
    tabsContent[i].classList = "tab__content tab__content_active"
}

for(const tbs of tabs){
    tbs.addEventListener('click', chengeActiveTabs);
}