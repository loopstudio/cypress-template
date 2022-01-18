const { expect } = require("chai")

describe('API Testing Automation Skeleton', () => {
    it('GET a single post', () => {
        const authorization = "eyJraWQiOiI5eTdZMXpTNUwtNi0xaTJfM0JLYnB3WXVQQ29tY294NjFfOWNsRnVHVWtzIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmpyU1Y4Zmg1a2Z3a1BWdEpNaGRQVlBuQzBPd1FiekVrSGJCcXFpUFFJUDgiLCJpc3MiOiJodHRwczovL3Nzby1kZXYubG9va2luZ2dsYXNzY3liZXIuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiYXBpOi8vZGVmYXVsdCIsImlhdCI6MTY0MjQ0MzMyOSwiZXhwIjoxNjQyNDQ2OTI5LCJjaWQiOiIwb2F6b2x0Z2UwVGUxWHZDUDBoNyIsInVpZCI6IjAwdTE0Y3M3OWt2c2lVYVp4MGg4Iiwic2NwIjpbIm9wZW5pZCIsImVtYWlsIiwicHJvZmlsZSJdLCJzdWIiOiJlZmVycmVpcmFAbG9vcHN0dWRpby5kZXYiLCJzdWl0ZV9ncm91cHMiOlsiVGVtcERldk9yZzpzY291dFBSSU1FIiwiVGVtcERldk9yZzpzY291dElOU1BFQ1QiLCJUZW1wRGV2T3JnOnNjb3V0VklTSU9OIiwiVGVtcERldk9yZzpzY291dFRIUkVBVCJdLCJhY2Nlc3NMZXZlbCI6ImFkbWluIiwib3JnIjoiVGVtcERldk9yZyIsInByZWZlcnJlZF91c2VybmFtZSI6ImVmZXJyZWlyYUBsb29wc3R1ZGlvLmRldiIsInRpbWVvdXQiOjE4MDAwMDB9.Enn-IXMcMtRmzA4kqCY58yMi07k7zEIR1x7Sehw_osokv2W9-9mmaFTI9pNYVQTM_D_xszLwt3qssZ6wVIzn2NVnxrowmWHRTlfbEke_aYWqHtznVEERBr542NLB0p6PR7be5MNYj9c-hZQjlSADqrPBBsxeFK-p7IeyN_S1YK_FWEQCuYe40L6hE_pdf1SDXv4b3Z9w4sbE1xXICOHVfjnZjaGilxBks5p4QU8M6Ypb1Cj2obgIoNqffyrxABNOiB1EblSM0pwVgzHnRdcA1TTVBL7Ot4gy-uG6qqTU6Ge3QGpGPe1i1FkCqU9KeHtYIWbIDql_EYcRp1m8Ep5V8g";
        cy.request({
          method: 'GET',
          url: 'https://suite-api.lookingglasscyber.com:8000/v1/orgs/1/licenses?status=ACTIVE',
          headers: {
            authorization,
          }
        }).then(resp => {
          expect(resp.status).to.eq(200);
          //expect(resp.body.userId).to.eq(1);
          //expect(resp.body.id).to.eq(1);
          //expect(resp.body.title).to.eq("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
          //expect(resp.body.body).to.eq("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto");
        })
    })
})