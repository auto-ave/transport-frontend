import itertools
import sys

TIER_ONE = [
    "Ahmedabad",
    "Bangalore",
    "Bengaluru",
    "Chandigarh",
    "Chennai",
    "Delhi",
    "Hyderabad",
    "Indore",
    "Kanpur",
    "Lucknow",
    "Mumbai",
    "Noida",
    "Patna",
    "Pune",
    "Kolkata",
    "Gurgaon",
]

CITIES = [
    "Agra",
    "Ajmer",
    "Aligarh",
    "Amravati",
    "Amritsar",
    "Asansol",
    "Aurangabad",
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
    "Coimbatore",
    "Cuttack",
    "Dehradun",
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
    "Guwahati",
    "Gwalior",
    "Hamirpur",
    "Hubli Dharwad",
    "Jaipur",
    "Jalandhar",
    "Jammu",
    "Jamnagar",
    "Jamshedpur",
    "Jhansi",
    "Jodhpur",
    "Kakinada",
    "Kannur",
    "Kochi",
    "Kolhapur",
    "Kollam",
    "Kozhikode",
    "Kurnool",
    "Ludhiana",
    "Madurai",
    "Malappuram",
    "Mangalore",
    "Mathura",
    "Meerut",
    "Moradabad",
    "Mysore",
    "Nagpur",
    "Nanded",
    "Nashik",
    "Nellore",
    "Pondicherry",
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

##
## City to City type
##

ordered_list = list(itertools.permutations(TIER_ONE, 2))
sys.stdout = open('general-pages.txt', 'wt')

for pair in ordered_list:
    city1 = pair[0]
    city2 = pair[1]
    
    city1Small = city1.lower().replace(" ", "-")
    city2Small = city2.lower().replace(" ", "-")
    
    print({
        "path": f"{city1Small}/car-transport-{city1Small}-to-{city2Small}",
        "title": f"Car Transport from {city1} to {city2} - Autoave",
        "description": f"{city1} to {city2} safe car transport. Low priced and Hassle-free transfer of car from {city1} to {city2}. Affordable quotes and best service.",
        "keywords": f"car transport from {city1} to {city2}, car shipping from {city1} to {city2}, move car from {city1} to {city2}, car movers from {city1} to {city2}, car carrier from {city1} to {city2}, car transportation service, car shipping from {city1} to {city2}, car transportation service, car transport from {city1} to {city2}, {city1} to {city2} car transportation, car shipping from {city1} to {city2}, car transport charges from {city1} to {city2}",
        "pageHeading": f"Car transport services from {city1} to {city2}",
        "city": ""
    }, ",")
    
    print({
        "path": f"car-transport-from-{city1Small}-to-{city2Small}",
        "title": f"Car shipping from {city1} to {city2} - Best Car Shifting Services",
        "description": f"{city1} to {city2} safe car shipping. Low priced and Hassle-free transfer of car from {city1} to {city2}. Affordable quotes and best service.",
        "keywords": f"car shipping from {city1} to {city2}, move car from {city1} to {city2}, car movers from {city1} to {city2}, car carrier from {city1} to {city2}, car transportation service, car shipping from {city1} to {city2}, car transportation service, car transport from {city1} to {city2}, {city1} to {city2} car transportation, car shipping from {city1} to {city2}, car transport charges from {city1} to {city2}",
        "pageHeading": f"Car Shipping services from {city1} to {city2}",
        "city": ""
    }, ",")
    
    print({
        "path": f"car-packers-and-movers-from-{city1Small}-to-{city2Small}",
        "title": f"Car packers and movers from {city1} to {city2} - Autoave",
        "description": f"Move car from {city1} to {city2} safely. Low priced and Hassle-free transfer of car from {city1} to {city2}. Affordable quotes and best service.",
        "keywords": f"car packers and movers from {city1} to Belhi, car shipping from {city1} to {city2}, car transportation service, car transport from {city1} to {city2}, {city1} to {city2} car transportation, car shipping from {city1} to {city2}, car transport charges from {city1} to {city2}",
        "pageHeading": f"Car packers and movers from {city1} to {city2}",
        "city": ""
    }, ",")
    
    print({
        "path": f"car-shipping-from-{city1Small}-to-{city2Small}",
        "title": f"Ship my car from {city1} to Dehli - Lowest prices",
        "description": f"Ship car from {city1} to Dehli safely. Low priced and Hassle-free transfer of car from {city1} to {city2}. Affordable quotes and best service.",
        "keywords": f"car shipping from {city1} to {city2}, car transportation service, car transport from {city1} to {city2}, {city1} to {city2} car transportation, car shipping from {city1} to {city2}, car transport charges from {city1} to {city2}",
        "pageHeading": f"Ship my car from {city1} to Dehli",
        "city": ""
    }, ",")
    
    print({
        "path": f"car-shifting-from-{city1Small}-to-{city2Small}",
        "title": f"Car shifting services from {city1} to {city2} - Car carrier service",
        "description": f"{city1} to {city2} safe car shipping. Low priced and Hassle-free transfer of car from {city1} to {city2}. Affordable quotes and best service.",
        "keywords": f"car shifting services from {city1} to {city2}, cheapest car transport service from {city1} to {city2}, car transport from {city1} to {city2}, car shipping from {city1} to {city2}, move car from {city1} to {city2}, car movers from {city1} to {city2}, car carrier from {city1} to {city2}, car transportation service, car shipping from {city1} to {city2}, car transportation service, car transport from {city1} to {city2}, {city1} to {city2} car transportation, car shipping from {city1} to {city2}, car transport charges from {city1} to {city2}",
        "pageHeading": f"Car shifting services from {city1} to {city2}",
        "city": ""
    }, ",")
    
    print({
        "path": f"cheapest-car-transport-from-{city1Small}-to-{city2Small}",
        "title": f"Cheapest car transport service from {city1} to {city2}",
        "description": f"Cheapest car transport service from {city1} to {city2}. Low priced and Hassle-free transfer of car from {city1} to {city2}. Affordable quotes and best service.",
        "keywords": f"cheapest car transport service from {city1} to {city2}, car transport from {city1} to {city2}, car shipping from {city1} to {city2}, move car from {city1} to {city2}, car movers from {city1} to {city2}, car carrier from {city1} to {city2}, car transportation service, car shipping from {city1} to {city2}, car transportation service, car transport from {city1} to {city2}, {city1} to {city2} car transportation, car shipping from {city1} to {city2}, car transport charges from {city1} to {city2}",
        "pageHeading": f"Cheapest car transport service from {city1} to {city2}",
        "city": ""
    }, ",")
    
    print({
        "path": f"fastest-car-transport-from-{city1Small}-to-{city2Small}",
        "title": f"Fastest car transport service from {city1} to {city2}",
        "description": f"Fastest car transport service from {city1} to {city2}. Low priced and Hassle-free transfer of car from {city1} to {city2}. Affordable quotes and best service.",
        "keywords": f"fastest car transport service from {city1} to {city2}, car transport from {city1} to {city2}, car shipping from {city1} to {city2}, move car from {city1} to {city2}, car movers from {city1} to {city2}, car carrier from {city1} to {city2}, car transportation service, car shipping from {city1} to {city2}, car transportation service, car transport from {city1} to {city2}, {city1} to {city2} car transportation, car shipping from {city1} to {city2}, car transport charges from {city1} to {city2}",
        "pageHeading": f"Fastest car transport service from {city1} to {city2}",
        "city": ""
    }, ",")
    
    print({
        "path": f"best-car-transport-from-{city1Small}-to-{city2Small}",
        "title": f"Best Car transport service from {city1} to {city2}",
        "description": f"Best car transport service from {city1} to {city2}. Low priced and Hassle-free transfer of car from {city1} to {city2}. Affordable quotes and best service.",
        "keywords": f"best car transport service from {city1} to {city2}, car transport from {city1} to {city2}, car shipping from {city1} to {city2}, move car from {city1} to {city2}, car movers from {city1} to {city2}, car carrier from {city1} to {city2}, car transportation service, car shipping from {city1} to {city2}, car transportation service, car transport from {city1} to {city2}, {city1} to {city2} car transportation, car shipping from {city1} to {city2}, car transport charges from {city1} to {city2}",
        "pageHeading": f"Best car transport service from {city1} to {city2}",
        "city": ""
    }, ",")
    
    print({
        "path": f"move-car-from-{city1Small}-to-{city2Small}",
        "title": f"Move your car from {city1} to {city2} - Autoave",
        "description": f"Move car from {city1} to {city2} safely. Low priced and Hassle-free transfer of car from {city1} to {city2}. Affordable quotes and best service.",
        "keywords": f"move car from {city1} to {city2}, car movers from {city1} to {city2}, car carrier from {city1} to {city2}, car transportation service, car shipping from {city1} to {city2}, car transportation service, car transport from {city1} to {city2}, {city1} to {city2} car transportation, car shipping from {city1} to {city2}, car transport charges from {city1} to {city2}",
        "pageHeading": f"Move your car from {city1} to {city2}",
        "city": ""
    }, ",")
    
    print({
        "path": f"car-carrier-from-{city1Small}-to-{city2Small}",
        "title": f"Car carrier from {city1} to {city2}",
        "description": f"{city1} to {city2} safe car carrier. Low priced and Hassle-free transfer of car from {city1} to {city2}. Affordable quotes and best service.",
        "keywords": f"car carrier from {city1} to {city2}, car transportation service, car shipping from {city1} to {city2}, car transportation service, car transport from {city1} to {city2}, {city1} to {city2} car transportation, car shipping from {city1} to {city2}, car transport charges from {city1} to {city2}",
        "pageHeading": f"Car carrier services from {city1} to {city2}",
        "city": ""
    }, ",")
    
    
##
## Single type
##

# for city in CITIES:
#     citySmall = city.lower().replace(" ", "-")

#     print({
#         "path": f"car-transportation-in-{citySmall}",
#         "title": f"Car Transport in {city} - Autoave",
#         "description": f"Best car transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Get best rates, charges, quotes from top car transportation services providers.",
#         "keywords": f"car transport in {city}, car transport company in {city}, car packers and movers in {city}, car shifting services in {city}",
#         "pageHeading": f"Car Transportation in {city}",
#     }, ",")
    
#     print({
#         "path": f"{citySmall}/car-transport",
#         "title": f"Car Transportation in {city} - Autoave",
#         "description": f"Best car transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Get best rates, charges, quotes from top car transportation services providers.",
#         "keywords": f"car transport in {city}, car transport company in {city}, car packers and movers in {city}, car shifting services in {city}",
#         "pageHeading": f"Car Transportation in {city}",
#     }, ",")
    
#     print({
#         "path": f"car-transport-services/{citySmall}",
#         "title": f"Car Transport Services in {city} - Car Carriers in {city}",
#         "description": f" Best car transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Get best rates, charges, quotes from top car transportation services providers.",
#         "keywords": f"car transport in {city}, car transport company in {city}, car packers and movers in {city}, car shifting services in {city}",
#         "pageHeading": f"Car Transportation in {city}",
#     }, ",")
    
#     print({
#         "path": f"best-car-transportation-in-{citySmall}",
#         "title": f"Best Car Transport Service in {city} - Car Carriers",
#         "description": f"Best car transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Get best rates, charges, quotes from top car transportation services providers.",
#         "keywords": f"car transport in {city}, car transport company in {city}, car packers and movers in {city}, car shifting services in {city}",
#         "pageHeading": f"Car Transportation in {city}",
#     }, ",")
    
#     print({
#         "path": f"car-transportation-service-{citySmall}",
#         "title": f"Car Transport Service in {city} - Autoave",
#         "description": f"Best car transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Get best rates, charges, quotes from top car transportation services providers.",
#         "keywords": f"car transport in {city}, car transport company in {city}, car packers and movers in {city}, car shifting services in {city}",
#         "pageHeading": f"Car Transportation in {city}",
#     }, ",")
    
#     print({
#         "path": f"car-transportation-in-{citySmall}/car-packers-and-movers",
#         "title": f"Car Packers and Movers in {city} - Car Transport Service",
#         "description": f"Car Packers and Movers in India - Autoave offers you the best vehicles, car carrier services in India. Get best rates, charges, quotes from top car carriers services providers. Car Carriers in {city}.",
#         "keywords": f"car packers in {city}, car packers and movers in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
#         "pageHeading": f"Car Packer and Movers in {city}",
#     }, ",")
    
#     print({
#         "path": f"car-carriers-in-{citySmall}",
#         "title": f"Car Carrier Services in {city} - Car Transport Service",
#         "description": f"Car Carriers Services in India - Autoave offers you the best vehicles, car carrier services in India. Get best rates, charges, quotes from top car carriers services providers. Car Packers and Movers.",
#         "keywords": f"car carrier service in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
#         "pageHeading": f"Car Carrier Service in {city}",
#     }, ",")
    
#     print({
#         "path": f"car-packers-and-movers-in-{citySmall}",
#         "title": f"Car Packers and Movers in {city} - Autoave",
#         "description": f"Best car shifting and transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Top Car Packers and Movers. Get best rates, charges, quotes from top car transportation services providers.",
#         "keywords": f"car packers in {city}, car packers and movers in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
#         "pageHeading": f"Car Packer and Movers in {city}",
#     }, ",")
    
#     print({
#         "path": f"services/car-shipping-service-in-india",
#         "title": f"Car Shipping Service in India - Car Transport Service",
#         "description": f"Best car transportations and shipping in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Top Car Packers and Movers. Get best rates, charges, quotes from top car transportation services providers.",
#         "keywords": f"car shipping in {city}, car transport in {city}, car shipping services in {city}",
#         "pageHeading": f"Car Shipping Service in {city}",
#     }, ",")
    
#     print({
#         "path": f"car-shifting-service-{citySmall}",
#         "title": f"Car Shifting Service in {city} - Autoave",
#         "description": f"Best car transportations and shifting in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Top Car Packers and Movers. Get best rates, charges, quotes from top car transportation services providers.",
#         "keywords": f"car shifting in {city}, car shifting services in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
#         "pageHeading": f"Car Shifting Service in {city}",
#     }, ",")
    
#     print({
#         "path": f"{citySmall}/car-packers-and-movers",
#         "title": f"Car Packing and Movers in {city} - Autoave",
#         "description": f"Car Packers and Movers in India - Autoave offers you the best vehicles, car carrier services in India. Get best rates, charges, quotes from top car carriers services providers. Car Carriers in {city}.",
#         "keywords": f"car packer and movers in {city}, car shifting services in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
#         "pageHeading": f"Car Packer and Mover in {city}",
#     }, ",")
    
#     print({
#         "path": f"{citySmall}/car-shifting",
#         "title": f"Car Shifting Services in {city} - Autoave",
#         "description": f"Best car shifting and transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Top Car Packers and Movers. Get best rates, charges, quotes from top car transportation services providers.",
#         "keywords": f"car shifting in {city}, car shifting services in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
#         "pageHeading": f"Car Shifting from {city}",
#     }, ",")
    
#     print({
#         "path": f"{citySmall}/car-transportation",
#         "title": f"Car Transport in {city} - Vehicle Shifting",
#         "description": f"Best car transportations in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Get best rates, charges, quotes from top car transportation services providers.",
#         "keywords": f"car transportation in {city}, car shifting services in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
#         "pageHeading": f"Car Transport Service in {city}",
#     }, ",")
    
#     print({
#         "path": f"{citySmall}/car-carriers",
#         "title": f"Car Carrier Service in {city} - Autoave",
#         "description": f"Car Carriers Services in India - Autoave offers you the best vehicles, car carrier services in India. Get best rates, charges, quotes from top car carriers services providers. Car Packers and Movers.",
#         "keywords": f"car carrier in {city}, car shifting services in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
#         "pageHeading": f"Car Carrier Service in {city}",
#     }, ",")
    
#     print({
#         "path": f"{citySmall}/car-shipping",
#         "title": f"Car Shipping Services in India, Car Transport Service, Car Transportation Service,Vehicle Shifting Service, Car Transportation Service Provider",
#         "description": f" Find best car shipping and transportations  in {city}, vehicle shifting, car carriers and shipping cost effective service providers in {city}. Top Car Packers and Movers. Get best rates, charges, quotes from top car transportation services providers.",
#         "keywords": f"car shifting in {city}, car shifting services in {city}, car transport in {city}, car transport company in {city}, car shifting services in {city}",
#         "pageHeading": f"Car Shifting from {city}",
#     }, ",")