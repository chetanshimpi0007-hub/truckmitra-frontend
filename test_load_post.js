async function testLoad() {
    try {
        console.log("Logging in...");
        let res = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                loginType: "EMAIL_PASSWORD",
                email: "praju@gmail.com", // Assuming shipper
                password: "Password123!" 
            })
        });
        let data = await res.json();
        const token = data.data.token;
        console.log("Token:", token.substring(0, 20) + "...");

        console.log("Posting Load...");
        const payload = {
            source: "Mumbai",
            destination: "Pune",
            weight: 10.5,
            materialType: "Construction",
            pickupDate: "2026-06-25T14:30",
            budget: 5000,
            isBiddingEnabled: true,
            assignmentType: "OPEN_MARKET"
        };
        res = await fetch('http://localhost:8080/api/loads', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        });
        data = await res.json();
        console.log("Post Load Response:", res.status, data);

    } catch (error) {
        console.error("Error:", error);
    }
}
testLoad();
