const REMOTE_YEAR = 3000;

async function display_resolutions(target_id, resolution_asset, header_level, call = null) {
    /*
     * Compare resolution objects; to be used in a sort method on array of objects.
     * 
     * Sorting takes a decreasing order by year, then a decreasing order by meeting date and then an increasing order by resolution number
     */
    const sort_resolutions = (a,b) => {
        if (a.year === b.year) {
            if (a.date === b.date) {
                return a.number - b.number;
            } else {
                if (a.date < b.date) {
                    return 1;
                } else if (a.date > b.date) {
                    return -1;
                } 
            }
        } else {
            return b.year - a.year;
        }
    }

    /*
    * Generate the HTML listing of all the resolutions
    */
    const retrieve_html = (resolutions) => {
        let retval = '';
        // y2k problem for the future:-)
        let year   = REMOTE_YEAR;
        if (resolutions.length === 0) {
            return `${retval}`;
        } else {
            resolutions.forEach(resolution => {
                if (resolution.year < year) {
                    // Close the previous list if there was any
                    if (year !== REMOTE_YEAR) {
                        retval = `${retval}</ul>\n`
                    }
                    retval = `${retval}\n<h${header_level}>${resolution.year}</h${header_level}>\n<ul>\n`
                    year = resolution.year;
                }
                retval = `${retval}<li><a href="${resolution.url}">Resolution #${resolution.number} on ${resolution.date}</a>: ${resolution.text}</li>\n`;
            });
            return `${retval}</ul>\n</div>`;    
        }
    }

    const target                = document.getElementById(target_id);
    const resolution_structures = await (await fetch(resolution_asset)).json();
    const resolutions = (call !== null) ? resolution_structures.resolutions.filter((resolution) => resolution.call === call) : resolution_structures.resolutions;
 
    target.innerHTML = retrieve_html(resolutions.sort(sort_resolutions));
}
