async function fetchRegionEntries()
{
    const category = "REGION";
    const region = "KZSE";

    try
    {
        const rsp = await fetch('region_entries.json');
        const data = await rsp.json();

        console.log(data);

        //Ensure data is an array
        if (!Array.isArray(data))
        {
            console.error("JSON data is not an array");
            return [];
        }

        return data;
    }
    catch (err)
    {
        console.error("Failed to load JSON: ", err);
        return [];
    }
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
    const data = await fetchRegionEntries();
    populateRegionTable(data);
}