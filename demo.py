from time import sleep
from smbus2 import SMBus

switch = ''

try:
    with SMBus(1) as bus:
        while True:
            b = bus.read_i2c_block_data(0x40,0x00,0x06)
            if str(''.join(map(chr, b))) != switch:
                switch = str(''.join(map(chr, b))) 
                print(switch)
            sleep(1)
except IOError as err:
    print(err)