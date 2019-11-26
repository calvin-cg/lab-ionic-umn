import { TestBed } from '@angular/core/testing';

import { TodoDetailsService } from './todo-details.service';

describe('TodoDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoDetailsService = TestBed.get(TodoDetailsService);
    expect(service).toBeTruthy();
  });
});
