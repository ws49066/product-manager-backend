# Create a folder named keys
mkdir keys
# Minimum RSA key length is 1024 bits
# Maximum RSA key length is 16384 bits 
openssl genpkey -algorithm RSA -out keys/key.pem -pkeyopt rsa_keygen_bits:2048
# Write public key to keys/rsa.key.pub file
openssl rsa -in keys/key.pem -pubout -out keys/key.pub

