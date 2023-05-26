import os

# Specify the path to the "japi" folder
japi_folder_path = r"C:\Users\havya\Downloads\JioSaavnAPI-master\JioSaavnAPI-master\jiosaavn-api\public"
print(japi_folder_path )
# Change directory to the "japi" folder
os.chdir(japi_folder_path)

# Install dependencies (if required)
# Uncomment the following lines if you need to install dependencies using pip
# dependencies_command = "pip install -r requirements.txt"
# os.system(dependencies_command)

# Start the server
# Replace "server.py" with the appropriate startup script for your server
server_command = "node server.js"
os.system(server_command)
