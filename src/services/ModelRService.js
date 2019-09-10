export function loadModelR() {
        return fetch('https://next.json-generator.com/api/json/get/41ORKNZDU')
            .then(result => result.json())
            .then(json => json.data)
    
    }