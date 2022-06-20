import itertools
import sys

CITIES = [
    "Agra",
    "Ahmedabad",
    "Ajmer",
    "Aligarh",
    "Amravati",
    "Amritsar",
    "Asansol",
    "Aurangabad",
    "Bangalore",
    "Bareilly",
    "Belgaum",
    "Bhavnagar",
    "Bhilai",
    "Bhiwandi",
    "Bhopal",
    "Bhubaneswar",
    "Bijapur",
    "Bikaner",
    "Bilaspur",
    "Bokaro Steel City",
    "Chandigarh",
    "Chennai",
    "Coimbatore",
    "Cuttack",
    "Dehradun",
    "Delhi",
    "Dhanbad",
    "Durgapur",
    "Erode",
    "Faridabad",
    "Firozabad",
    "Ghaziabad",
    "Goa",
    "Gorakhpur",
    "Gulbarga",
    "Guntur",
    "Gurgaon",
    "Guwahati",
    "Gwalior",
    "Hamirpur",
    "Hubli Dharwad",
    "Hyderabad",
    "Indore",
    "Jaipur",
    "Jalandhar",
    "Jammu",
    "Jamnagar",
    "Jamshedpur",
    "Jhansi",
    "Jodhpur",
    "Kakinada",
    "Kannur",
    "Kanpur",
    "Kochi",
    "Kolhapur",
    "Kolkata",
    "Kollam",
    "Kozhikode",
    "Kurnool",
    "Lucknow",
    "Ludhiana",
    "Madurai",
    "Malappuram",
    "Mangalore",
    "Mathura",
    "Meerut",
    "Moradabad",
    "Mumbai",
    "Mysore",
    "Nagpur",
    "Nanded",
    "Nashik",
    "Nellore",
    "Noida",
    "Patna",
    "Pondicherry",
    "Pune",
    "Purulia Prayagraj",
    "Raipur",
    "Rajahmundry",
    "Rajkot",
    "Ranchi",
    "Rourkela",
    "Salem",
    "Sangli",
    "Shimla",
    "Siliguri",
    "Solapur",
    "Srinagar",
    "Surat",
    "Thiruvananthapuram",
    "Thrissur",
    "Tiruchirappalli",
    "Tiruppur",
    "Ujjain",
    "Vadodara",
    "Varanasi",
    "Vasai-Virar City",
    "Vellore",
    "Vijayawada",
    "Visakhapatnam",
    "Warangal",
    "Thane",
    "Navi Mumbai",
    "Kalyan",
    "Andheri",
]

sys.stdout = open('general-pages.txt', 'wt')

for city in CITIES:
    citySmall = city.lower().replace(" ", "-")

    print({
        "path": f"car-transportation-in-{citySmall}",
        "title": f"Car Transport in {city} - Autoave",
        "description": f"Best car transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Get best rates, charges, quotes from top car transportation services providers.",
        "keywords": f"car transport in {city}, car transport company in {city}, car packers and movers in {city}, car shifting services in {city}",
        "pageHeading": f"Car Transportation in {city}",
    }, ",")
    
    print({
        "path": f"{citySmall}/car-transport",
        "title": f"Car Transportation in {city} - Autoave",
        "description": f"Best car transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Get best rates, charges, quotes from top car transportation services providers.",
        "keywords": f"car transport in {city}, car transport company in {city}, car packers and movers in {city}, car shifting services in {city}",
        "pageHeading": f"Car Transportation in {city}",
    }, ",")
    
    print({
        "path": f"car-transport-services/{citySmall}",
        "title": f"Car Transport Services in {city} - Car Carriers in {city}",
        "description": f" Best car transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Get best rates, charges, quotes from top car transportation services providers.",
        "keywords": f"car transport in {city}, car transport company in {city}, car packers and movers in {city}, car shifting services in {city}",
        "pageHeading": f"Car Transportation in {city}",
    }, ",")
    
    print({
        "path": f"best-car-transportation-in-{citySmall}",
        "title": f"Best Car Transport Service in {city} - Car Carriers",
        "description": f"Best car transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Get best rates, charges, quotes from top car transportation services providers.",
        "keywords": f"car transport in {city}, car transport company in {city}, car packers and movers in {city}, car shifting services in {city}",
        "pageHeading": f"Car Transportation in {city}",
    }, ",")
    
    print({
        "path": f"car-transportation-service-{citySmall}",
        "title": f"Car Transport Service in {city} - Autoave",
        "description": f"Best car transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Get best rates, charges, quotes from top car transportation services providers.",
        "keywords": f"car transport in {city}, car transport company in {city}, car packers and movers in {city}, car shifting services in {city}",
        "pageHeading": f"Car Transportation in {city}",
    }, ",")
    
    print({
        "path": f"car-transportation-in-{citySmall}/car-packers-and-movers",
        "title": f"Car Packers and Movers in {city} - Car Transport Service",
        "description": f"Car Packers and Movers in India - Autoave offers you the best vehicles, car carrier services in India. Get best rates, charges, quotes from top car carriers services providers. Car Carriers in {city}.",
        "keywords": f"car packers in {city}, car packers and movers in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
        "pageHeading": f"Car Packer and Movers in {city}",
    }, ",")
    
    print({
        "path": f"car-carriers-in-{citySmall}",
        "title": f"Car Carrier Services in {city} - Car Transport Service",
        "description": f"Car Carriers Services in India - Autoave offers you the best vehicles, car carrier services in India. Get best rates, charges, quotes from top car carriers services providers. Car Packers and Movers.",
        "keywords": f"car carrier service in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
        "pageHeading": f"Car Carrier Service in {city}",
    }, ",")
    
    print({
        "path": f"car-packers-and-movers-in-{citySmall}",
        "title": f"Car Packers and Movers in {city} - Autoave",
        "description": f"Best car shifting and transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Top Car Packers and Movers. Get best rates, charges, quotes from top car transportation services providers.",
        "keywords": f"car packers in {city}, car packers and movers in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
        "pageHeading": f"Car Packer and Movers in {city}",
    }, ",")
    
    print({
        "path": f"services/car-shipping-service-in-india",
        "title": f"Car Shipping Service in India - Car Transport Service",
        "description": f"Best car transportations and shipping in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Top Car Packers and Movers. Get best rates, charges, quotes from top car transportation services providers.",
        "keywords": f"car shipping in {city}, car transport in {city}, car shipping services in {city}",
        "pageHeading": f"Car Shipping Service in {city}",
    }, ",")
    
    print({
        "path": f"car-shifting-service-{citySmall}",
        "title": f"Car Shifting Service in {city} - Autoave",
        "description": f"Best car transportations and shifting in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Top Car Packers and Movers. Get best rates, charges, quotes from top car transportation services providers.",
        "keywords": f"car shifting in {city}, car shifting services in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
        "pageHeading": f"Car Shifting Service in {city}",
    }, ",")
    
    print({
        "path": f"{citySmall}/car-packers-and-movers",
        "title": f"Car Packing and Movers in {city} - Autoave",
        "description": f"Car Packers and Movers in India - Autoave offers you the best vehicles, car carrier services in India. Get best rates, charges, quotes from top car carriers services providers. Car Carriers in {city}.",
        "keywords": f"car packer and movers in {city}, car shifting services in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
        "pageHeading": f"Car Packer and Mover in {city}",
    }, ",")
    
    print({
        "path": f"{citySmall}/car-shifting",
        "title": f"Car Shifting Services in {city} - Autoave",
        "description": f"Best car shifting and transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Top Car Packers and Movers. Get best rates, charges, quotes from top car transportation services providers.",
        "keywords": f"car shifting in {city}, car shifting services in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
        "pageHeading": f"Car Shifting from {city}",
    }, ",")
    
    print({
        "path": f"{citySmall}/car-transportation",
        "title": f"Car Transport in {city} - Vehicle Shifting",
        "description": f"Best car transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Get best rates, charges, quotes from top car transportation services providers.",
        "keywords": f"car transportation in {city}, car shifting services in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
        "pageHeading": f"Car Transport Service in {city}",
    }, ",")
    
    print({
        "path": f"{citySmall}/car-carriers",
        "title": f"Car Carrier Service in {city} - Autoave",
        "description": f"Car Carriers Services in India - Autoave offers you the best vehicles, car carrier services in India. Get best rates, charges, quotes from top car carriers services providers. Car Packers and Movers.",
        "keywords": f"car carrier in {city}, car shifting services in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
        "pageHeading": f"Car Carrier Service in {city}",
    }, ",")
    
    print({
        "path": f"{citySmall}/car-shipping",
        "title": f"Car Shipping Services in India, Car Transport Service, Car Transportation Service,Vehicle Shifting Service, Car Transportation Service Provider",
        "description": f" Find best car shipping and transportations  in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Top Car Packers and Movers. Get best rates, charges, quotes from top car transportation services providers.",
        "keywords": f"car shifting in {city}, car shifting services in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
        "pageHeading": f"Car Shifting from {city}",
    }, ",")