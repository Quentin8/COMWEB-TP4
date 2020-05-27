#import asyncio
#import websockets

async def test(websocket, path):
    messageTosend = "texte"
    await websocket.send(messageTosend)

start_server = websockets.serve(test, "localhost", 12345)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
