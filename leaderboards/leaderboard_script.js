async function fetchRegionEntries()
{
    const category = "REGION";
    const region = "KZSE";

    try
    {
        const rsp = await fetch('region_entries.json');
        const data = await rsp.json();

        console.log(data);

        ////Check if data is an array
        //if (!Array.isArray(data))
        //{
        //    console.error("JSON data is not an array");
        //    return [];
        //}

        return data;
    }
    catch (err)
    {
        console.error("Failed to load JSON: ", err);
        return [];
    }
}

function getRegionEntries()
{
    const data = [
        {
            "rank": 1,
            "name": "Ethan",
            "position": "SEA_APP",
            "score": 1515
        },
        {
            "rank": 2,
            "name": "mmiller",
            "position": "HOU_APP",
            "score": 1203
        },
        {
            "rank": 3,
            "name": "MadHenn",
            "position": "PDX_APP",
            "score": 920
        },
        {
            "rank": 4,
            "name": "squidy",
            "position": "GEG_APP",
            "score": 901
        },
        {
            "rank": 5,
            "name": "pilotw09",
            "position": "SLC_APP",
            "score": 870
        }
    ];

    return data;
}

function populateRegionTable(data)
{
    const body = document.getElementById('regionTableBody')

    data.forEach(item =>
    {
        const row = document.createElement('tr');

        row.innerHTML = `
                    <td>${item.rank}</td>
                    <td>${item.name}</td>
                    <td>${item.position}</td>
                    <td>${item.score}</td>
                  `;

        body.appendChild(row);
    });
}

async function loadRegionLeaderboard()
{
    //const data = await fetchRegionEntries();
    const data = getRegionEntries();
    populateRegionTable(data);
}