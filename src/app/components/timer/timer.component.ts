import { Component, OnInit } from '@angular/core';
import { Observable, timer, Subscription } from 'rxjs';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public time: number | string = "lets's start...";
  
  private isTimerActive: boolean = false;
  private time$: Observable<number> = timer(1, 1000);
  private sub: Subscription = new Subscription();
  private subWait: Subscription = new Subscription();


  public tooglePlay(): void {
    if (this.isTimerActive) {
      this.sub.unsubscribe();
      this.isTimerActive = false;
      this.time = this.addZero(0);
    } else {
      this.isTimerActive = true;
      this.sub = this.time$.subscribe((t) => {
        this.time = this.getTransformTime(t)
      });
    }
  }

	public onWait(): void {
		if (this.isTimerActive) {
			this.isTimerActive = false;
			this.sub.unsubscribe();
		}
  	}

  public onReset(): void{
    this.sub.unsubscribe();
    this.isTimerActive = false;
    this.tooglePlay();
  }

  private getTransformTime(time: number): string {
    let seconds: number = time % 60;
    let minutes: number = Math.floor((time / 60) % 60);
    
    return `${this.addZero(minutes)}:${this.addZero(seconds)}`;
  }

  private addZero(n: number): string | number {
    return n < 10 ? '0' + n : n;
  }

  ngOnInit(): void {
  }

}

