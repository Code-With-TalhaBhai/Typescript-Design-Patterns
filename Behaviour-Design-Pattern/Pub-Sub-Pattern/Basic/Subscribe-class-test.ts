import { SubscribeClass } from "./Subscribe-class";


const sub = new SubscribeClass<string>();

const unsub = sub.Subscribe(console.log);

sub.publish("Hello");
sub.publish("World");
sub.publish("Independence");
unsub();
sub.publish("GoodBye");


class DataClass extends SubscribeClass<number> {
    constructor(public value: number) {
      super();
    }
  
    setValue(v: number) {
      this.value = v;
      this.publish(v);
    }
  }
  
  const dc = new DataClass(0);
  const dcUnsub = dc.Subscribe((v: number) => console.log(`DC1 Birthday of: ${v}`));
  const dcUnsub2 = dc.Subscribe((v: number) => console.log(`DC2 Deaths of: ${v}`));
  dc.setValue(42);
  dcUnsub();
  dcUnsub2();