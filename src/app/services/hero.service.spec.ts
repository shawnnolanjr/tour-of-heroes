import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { Hero } from '../types/hero';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HeroService, MessageService]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
  
  it('should display users name', inject([HeroService], (service: HeroService) => {
    const hero: Hero = { id: 1, name: 'katie' };
    const newHero = service.getHero(hero.id);
    expect(newHero).toEqual(hero);
  }));
});
