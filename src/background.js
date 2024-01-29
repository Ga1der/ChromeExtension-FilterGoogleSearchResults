const filter = ['.ru', '.su', 'vk.com']

const query = (url) => {
    const [domain, query_string] = url.split('?')
    const [query, anchor] = query_string.split('#')
    const [qq, ...other] = query.split('&')
    const [q_name, q_value] = qq.split('=')

    return q_value
}

const fix = (q_value, filter) => {
    let q = q_value + '%0D%0A'.repeat(3)
    filter.forEach((v, k) => {
        q = q.replaceAll(`+-${v}`, '')
        q = q.concat('', `+-${v}`)
    })

    return q
}

// ...
// ...
// ...

chrome.runtime.onInstalled.addListener((e) => {
    console.log("chrome.runtime.onInstalled.addListener", e);
})

chrome.runtime.onConnect.addListener((e) => {
    console.log('chrome.runtime.onConnect.addListener', e)
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.status === "loading"
        && tab.url
        && tab.url.includes('://www.google.com/search?q=')
    ) {
        const q_value = query(tab.url)
        if (q_value.includes(`-${filter[0]}`)) return;

        const q = fix(q_value, filter)
        chrome.tabs.update(tab.id, {url: `https://www.google.com/search?q=${q}`})
    }
})
