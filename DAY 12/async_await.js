console.log("Async");

async function order()
{
    try
    {
        await abc;
    }
    catch (err)
    {
        console.log("Error" + err);
    }
    finally
    {
        console.log("Finally");
    }
}
order()
    .then(() => console.log("Executed"))
    .catch(() => console.log("Not executed"));