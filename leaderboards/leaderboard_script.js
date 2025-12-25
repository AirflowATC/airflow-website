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

function populateRegionTable(data)
{
    const tbody = document.querySelector('#airportTable tbody');

    data.forEach(item =>
    {
        const row = document.createElement('tr');

        row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.city}</td>
                    <td>${item.traffic}</td>
                  `;

        tbody.appendChild(row);
    });
}

async function loadRegionLeaderboard()
{
    const data = await fetchRegionEntries();
    console.log(data);
    //populateRegionTable(data);
}